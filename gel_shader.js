import * as THREE from '/three.module.min.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gel-canvas-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
  const onMouseMove = (e) => {
    mouse.targetX = e.clientX / window.innerWidth;
    mouse.targetY = 1.0 - e.clientY / window.innerHeight;
  };
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    varying vec2 vUv;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution.xy;
      float aspect = u_resolution.x / u_resolution.y;
      st.x *= aspect;
      vec2 m = u_mouse;
      m.x *= aspect;

      float dist = distance(st, m);
      float mouseImpulse = exp(-dist * 3.5) * 0.45;

      float t = u_time * 0.25;
      float n1 = snoise(st * 1.8 + vec2(t * 0.3, t * 0.2) + mouseImpulse);
      float n2 = snoise(st * 3.2 - vec2(t * 0.4, -t * 0.1) + n1 * 0.4);
      float n3 = snoise(st * 5.0 + vec2(n2 * 0.5, t * 0.2));

      float gelWave = (n1 * 0.5 + n2 * 0.35 + n3 * 0.15) + mouseImpulse * 0.6;

      vec3 colBg = vec3(0.03, 0.03, 0.03); 
      vec3 colCrimson = vec3(0.25, 0.015, 0.025);
      vec3 colGold = vec3(0.77, 0.62, 0.39);

      float crimsonMask = smoothstep(-0.2, 0.8, gelWave);
      float goldHighlight = pow(smoothstep(0.4, 0.95, gelWave), 3.0);

      vec3 color = mix(colBg, colCrimson, crimsonMask * 0.35);
      color = mix(color, colGold, goldHighlight * 0.25);

      float fringe = smoothstep(0.6, 0.9, gelWave);
      color.r += fringe * 0.06;
      color.b += fringe * 0.02;

      vec2 uvCenter = vUv - 0.5;
      float vignette = 1.0 - dot(uvCenter, uvCenter) * 0.8;
      color *= clamp(vignette, 0.2, 1.0);

      gl_FragColor = vec4(color, 0.55);
    }
  `;

  const uniforms = {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
  };

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Floating gold particles
  const particleCount = 35;
  const pGeom = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 2;
    positions[i + 1] = (Math.random() - 0.5) * 2;
    positions[i + 2] = 0;
    velocities[i] = (Math.random() - 0.5) * 0.0003;
    velocities[i + 1] = Math.random() * 0.0005 + 0.0002;
  }
  pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0xC5A064,
    size: 0.012,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(pGeom, pMat);
  scene.add(particles);

  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    uniforms.u_resolution.value.set(width, height);
  };
  window.addEventListener('resize', onResize);

  let clock = new THREE.Clock();
  const animate = () => {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    uniforms.u_time.value = elapsed;
    uniforms.u_mouse.value.set(mouse.x, mouse.y);

    const pos = pGeom.attributes.position.array;
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i + 1] += velocities[i + 1];
      pos[i] += velocities[i];
      if (pos[i + 1] > 1.0) pos[i + 1] = -1.0;
      if (pos[i] > 1.0) pos[i] = -1.0;
      if (pos[i] < -1.0) pos[i] = 1.0;
    }
    pGeom.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  };
  animate();
});

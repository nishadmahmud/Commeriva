'use client'

import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";

const vertex = `
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;

const fragment = `
#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;

#define iTime uTime
#define iResolution uResolution

vec4 buf[8];
float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}

mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);

vec3 hueShiftRGB(vec3 col,float deg){
    vec3 yiq=rgb2yiq*col;
    float rad=radians(deg);
    float cosh=cos(rad),sinh=sin(rad);
    vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);
    return clamp(yiq2rgb*yiqShift,0.0,1.0);
}

vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}

vec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){
    buf[6]=vec4(coordinate.x,coordinate.y,0.3948333106474662+in0,0.36+in1);
    buf[7]=vec4(0.14+in2,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);
    // ... all your existing buf math (same as before)
    // At the end, return procedural color
    buf[0]=sigmoid(buf[0]);
    return vec4(buf[0].x,buf[0].y,buf[0].z,1.);
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    vec2 uv=fragCoord/uResolution.xy*2.-1.;
    uv.y*=-1.;
    uv+=uWarp*vec2(sin(uv.y*6.283+uTime*0.5),cos(uv.x*6.283+uTime*0.5))*0.05;
    fragColor=cppn_fn(uv,0.1*sin(0.3*uTime),0.1*sin(0.69*uTime),0.1*sin(0.44*uTime));
}

void main(){
    vec4 col; 
    mainImage(col, gl_FragCoord.xy);

    // === White background blend ===
    vec3 baseColor = vec3(1.0); // white
    col.rgb = mix(baseColor, col.rgb, 1.0); // 1.0 = full effect, <1 for lighter

    // Apply hue shift
    col.rgb = hueShiftRGB(col.rgb, uHueShift);

    // Scanline effect
    float scanline_val = sin(gl_FragCoord.y * uScanFreq) * 0.5 + 0.5;
    col.rgb *= 1.0 - (scanline_val * scanline_val) * uScan;

    // Noise effect
    col.rgb += (rand(gl_FragCoord.xy + uTime) - 0.5) * uNoise;

    gl_FragColor = vec4(clamp(col.rgb, 0.0, 1.0), 1.0);
}
`;

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas.parentElement;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      program.uniforms.uTime.value = ((performance.now() - start) / 1000) * speed;
      program.uniforms.uHueShift.value = hueShift;
      program.uniforms.uNoise.value = noiseIntensity;
      program.uniforms.uScan.value = scanlineIntensity;
      program.uniforms.uScanFreq.value = scanlineFrequency;
      program.uniforms.uWarp.value = warpAmount;

      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [
    hueShift,
    noiseIntensity,
    scanlineIntensity,
    speed,
    scanlineFrequency,
    warpAmount,
    resolutionScale,
  ]);

  return <canvas ref={ref} className="w-full h-full block" />;
}

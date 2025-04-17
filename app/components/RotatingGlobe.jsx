"use client";
import dynamic from "next/dynamic";
import React, { useRef, useEffect } from "react";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const RotatingGlobe = () => {
  const globeEl = useRef();

  useEffect(() => {
    function setAutoRotate() {
      if (globeEl.current && typeof globeEl.current.controls === 'function') {
        const controls = globeEl.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 2;
          // Debug log
          console.log('Globe controls set: autoRotate enabled');
          return true;
        }
      }
      return false;
    }
    // Try immediately, then repeatedly until successful
    if (!setAutoRotate()) {
      let tries = 0;
      const trySet = () => {
        if (setAutoRotate() || tries > 30) return;
        tries++;
        setTimeout(trySet, 100);
      };
      trySet();
    }
  }, []);

  return (
    <div className="w-full flex items-center ">
      <div style={{ width: 600, height: 600 }}>
        <Globe
          ref={globeEl}
          globeImageUrl="https://unpkg.com/three-globe@2.24.11/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0)"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default RotatingGlobe;

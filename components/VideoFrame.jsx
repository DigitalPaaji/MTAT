
"use client";

import React, { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 240;

const VideoFrame = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(-1);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;

    const images = Array.from({ length: TOTAL_FRAMES }, (_, index) => {
      const image = new Image();

     image.src = `/videoframs/${String(index + 1).padStart(4, "0")}.jpg`;

      image.onload = () => {
        if (cancelled) return;

        loadedCount++;

        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };

      image.onerror = () => {
        console.error("Image failed to load:", image.src);
      };

      return image;
    });

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!section || !canvas || !ctx) return;

    let rafId = null;

    const renderFrame = (frameIndex) => {
      const image = imagesRef.current[frameIndex];

      if (!image?.complete || !image.naturalWidth) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const scale = Math.max(
         rect.width / image.naturalWidth,
  rect.height / image.naturalHeight
      );

      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;

      ctx.drawImage(
  image,
  (rect.width - drawWidth) / 2,
  (rect.height - drawHeight) / 2,
  drawWidth,
  drawHeight
);

      currentFrameRef.current = frameIndex;
    };

    const updateAnimation = () => {
      rafId = null;

      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;

      const progress =
        scrollDistance > 0
          ? Math.max(0, Math.min(1, -rect.top / scrollDistance))
          : 0;

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * (TOTAL_FRAMES - 1))
      );

      if (frameIndex !== currentFrameRef.current) {
        renderFrame(frameIndex);
      }
    };

    const requestUpdate = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateAnimation);
      }
    };

    renderFrame(0);
    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full p-0 m-0 "
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Background lighting */}
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,100,120,0.22),transparent_65%)]" /> */}

      
        {/* Scroll animation */}
        <canvas
          ref={canvasRef}
          className="relative z-0 h-full w-full"
        />   

        {/* Loading screen */}
        {!loaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center ">
            <div className="text-center">
              <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-2 border-gray-700 border-t-cyan-400" />
              <p className="text-xs tracking-[0.25em] text-gray-400">
                LOADING EXPERIENCE...
              </p>
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-400">
            Scroll to explore
          </p>

          <div className="h-1 w-28 overflow-hidden rounded-full ">
            <div
              className="h-full bg-cyan-400 transition-[width] duration-100"
              style={{
                width: loaded ? "100%" : "0%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFrame;

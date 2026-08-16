import React, { useEffect, useRef } from 'react';

// Custom cursor follower
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse/trackpad)
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let isHovering = false;
    let isClicking = false;
    let isTextInput = false;
    let isVisible = false;
    let currentScale = 1;
    let targetScale = 1;
    let currentOpacity = 0;
    let targetOpacity = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        isVisible = true;
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for text editing elements
      const isInput = !!target.closest('input, textarea, [contenteditable="true"], select');
      if (isInput) {
        isTextInput = true;
        isHovering = false;
        return;
      }
      isTextInput = false;

      // Check for interactive clickable elements
      const isClickable = !!target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], [data-cursor-hover], .cyber-card, .tilt-card, .skill-tag, [tabindex="0"]'
      );

      isHovering = isClickable;
    };

    const onMouseLeaveDoc = () => {
      isVisible = false;
    };

    const onMouseEnterDoc = () => {
      isVisible = true;
    };

    const onWindowBlur = () => {
      // Handles case when user clicks or hovers an iframe (e.g. YouTube or PDF) or leaves active tab
      isVisible = false;
    };

    const onWindowFocus = () => {
      isVisible = true;
    };

    // Animation Loop
    const render = () => {
      // Lerp positions (0.2 for ultra-responsive yet silky follower)
      pos.x += (mouse.x - pos.x) * 0.22;
      pos.y += (mouse.y - pos.y) * 0.22;

      // Determine target scale & opacity
      if (isTextInput) {
        targetScale = 0.3;
        targetOpacity = 0; // Let native text cursor show clearly
      } else if (isHovering) {
        targetScale = isClicking ? 1.6 : 2.0;
        targetOpacity = 1;
      } else {
        targetScale = isClicking ? 0.75 : 1;
        targetOpacity = isVisible ? 1 : 0;
      }

      // Smooth scale & opacity transitions
      currentScale += (targetScale - currentScale) * 0.2;
      currentOpacity += (targetOpacity - currentOpacity) * 0.15;

      // Direct GPU transform updates
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(${isClicking ? 0.5 : 1})`;
        dotRef.current.style.opacity = isTextInput ? '0' : currentOpacity.toFixed(3);
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${currentScale.toFixed(3)})`;
        ringRef.current.style.opacity = currentOpacity.toFixed(3);
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('blur', onWindowBlur, { passive: true });
    window.addEventListener('focus', onWindowFocus, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeaveDoc, { passive: true });
    document.documentElement.addEventListener('mouseenter', onMouseEnterDoc, { passive: true });

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('blur', onWindowBlur);
      window.removeEventListener('focus', onWindowFocus);
      document.removeEventListener('mouseover', onMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.documentElement.removeEventListener('mouseenter', onMouseEnterDoc);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden lg:block pointer-events-none fixed inset-0 z-[999999] overflow-hidden"
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-[#CCFF00] pointer-events-none shadow-[0_0_8px_#CCFF00]"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Magnetic Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-[#CCFF00]/80 bg-[#CCFF00]/10 pointer-events-none backdrop-blur-[1px] shadow-[0_0_15px_rgba(204,255,0,0.25)]"
        style={{ willChange: 'transform, opacity' }}
      />
    </div>
  );
};

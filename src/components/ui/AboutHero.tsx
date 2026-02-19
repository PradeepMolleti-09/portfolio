import { useEffect, useRef, useState } from "react";

function Eye({ tilt = 0 }: { tilt?: number }) {
    const pupilRef = useRef<HTMLDivElement | null>(null);
    const eyeRef = useRef<HTMLDivElement | null>(null);
    const [blink, setBlink] = useState(false);

    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });

    // Track cursor and touch position
    useEffect(() => {
        const handleInteraction = (clientX: number, clientY: number) => {
            if (!eyeRef.current) return;

            const rect = eyeRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = clientX - centerX;
            const dy = clientY - centerY;

            const angle = Math.atan2(dy, dx);
            const maxMove = rect.width * 0.15; // Responsive max move

            target.current.x = Math.cos(angle) * maxMove;
            target.current.y = Math.sin(angle) * maxMove;
        };

        const handleMouseMove = (e: MouseEvent) => {
            handleInteraction(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches[0]) {
                handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    // Smooth animation loop
    useEffect(() => {
        let animationFrame: number;

        const animate = () => {
            if (!pupilRef.current) return;

            // LERP for smooth movement
            current.current.x += (target.current.x - current.current.x) * 0.08;
            current.current.y += (target.current.y - current.current.y) * 0.08;

            pupilRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;

            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    // Random blinking
    useEffect(() => {
        const blinkLoop = () => {
            const delay = Math.random() * 4000 + 3000;

            setTimeout(() => {
                setBlink(true);
                setTimeout(() => setBlink(false), 150);
                blinkLoop();
            }, delay);
        };

        blinkLoop();
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            <div
                ref={eyeRef}
                className={`
          relative
          w-[100px] h-[100px] md:w-[160px] md:h-[160px]
          bg-white
          rounded-full
          border-4 border-black
          flex items-center justify-center
          transition-transform duration-150
          ${blink ? "scale-y-0" : "scale-y-100"}
        `}
                style={{ transform: `rotate(${tilt}deg)` }}
            >
                <div
                    ref={pupilRef}
                    className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-black rounded-full"
                />
            </div>
        </div>
    );
}

export default function AboutHero() {
    return (
        <div className="w-full h-full flex items-center justify-center gap-8 md:gap-24">
            <Eye tilt={-6} />
            <Eye tilt={6} />
        </div>
    );
}

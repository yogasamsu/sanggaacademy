import { useEffect, useState } from 'react';

interface Circle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export const FloatingBackground = () => {
    const [circles, setCircles] = useState<Circle[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Generate random circles
        const generateCircles = (): Circle[] => {
            return Array.from({ length: 8 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 300 + 100,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.15 + 0.05,
            }));
        };

        setCircles(generateCircles());

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        // Scroll handler
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        // Animate circles
        const interval = setInterval(() => {
            setCircles((prev) =>
                prev.map((circle) => {
                    let newX = circle.x + circle.speedX;
                    let newY = circle.y + circle.speedY;

                    // Bounce off edges
                    if (newX < -10 || newX > 110) circle.speedX *= -1;
                    if (newY < -10 || newY > 110) circle.speedY *= -1;

                    newX = Math.max(-10, Math.min(110, newX));
                    newY = Math.max(-10, Math.min(110, newY));

                    return { ...circle, x: newX, y: newY };
                })
            );
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {circles.map((circle) => {
                // Parallax effect based on mouse position
                const parallaxX = (mousePosition.x - 50) * 0.02;
                const parallaxY = (mousePosition.y - 50) * 0.02;

                // Scroll effect
                const scrollEffect = (scrollY * 0.05) % 100;

                return (
                    <div
                        key={circle.id}
                        className="absolute rounded-full transition-all duration-1000 ease-out"
                        style={{
                            left: `${circle.x + parallaxX}%`,
                            top: `${circle.y + parallaxY - scrollEffect * 0.1}%`,
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            background: `radial-gradient(circle, rgba(23, 162, 184, ${circle.opacity}) 0%, rgba(0, 201, 215, ${circle.opacity * 0.5}) 50%, transparent 70%)`,
                            filter: 'blur(40px)',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                );
            })}

            {/* Additional gradient overlays for depth */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 201, 215, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
                style={{
                    background: 'radial-gradient(circle, rgba(23, 162, 184, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: `translate(-${mousePosition.x * 0.3}px, -${mousePosition.y * 0.3}px)`,
                }}
            />
        </div>
    );
};

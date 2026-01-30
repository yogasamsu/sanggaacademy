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

    useEffect(() => {
        // Generate random circles
        const generateCircles = (): Circle[] => {
            return Array.from({ length: 10 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 500 + 200,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.15 + 0.05,
            }));
        };

        setCircles(generateCircles());

        // Animate circles continuously
        const interval = setInterval(() => {
            setCircles((prev) =>
                prev.map((circle) => {
                    let newX = circle.x + circle.speedX;
                    let newY = circle.y + circle.speedY;
                    let newSpeedX = circle.speedX;
                    let newSpeedY = circle.speedY;

                    // Bounce off edges with smooth direction change
                    if (newX < -15 || newX > 115) {
                        newSpeedX *= -1;
                        newX = Math.max(-15, Math.min(115, newX));
                    }
                    if (newY < -15 || newY > 115) {
                        newSpeedY *= -1;
                        newY = Math.max(-15, Math.min(115, newY));
                    }

                    return { ...circle, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
                })
            );
        }, 40);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className="absolute rounded-full will-change-transform"
                    style={{
                        left: `${circle.x}%`,
                        top: `${circle.y}%`,
                        width: `${circle.size}px`,
                        height: `${circle.size}px`,
                        background: `radial-gradient(circle, rgba(23, 162, 184, ${circle.opacity}) 0%, rgba(0, 201, 215, ${circle.opacity * 0.6}) 40%, transparent 70%)`,
                        filter: 'blur(50px)',
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.04s linear',
                    }}
                />
            ))}
        </div>
    );
};

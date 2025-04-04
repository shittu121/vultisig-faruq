"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

export const BackgroundGradientAnimation = ({
  gradientBackground = "#02122B",
  children,
  containerClassName,
}: {
  gradientBackground?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn("h-screen w-screen relative overflow-hidden", containerClassName)}
      style={{ backgroundColor: gradientBackground }}
    >
      {children}
      <ShootingStars />
    </div>
  );
};

export const ShootingStars = () => {
  const [star, setStar] = useState<ShootingStar | null>(null);

  useEffect(() => {
    const createStar = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle: Math.random() * 360,
        scale: 1,
        speed: 0, // No movement
        distance: 0,
      };
      setStar(newStar);
    };

    createStar();
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full">
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={10}
          height={1}
          fill="#9E00FF"
          transform={`rotate(${star.angle}, ${star.x + 5}, ${star.y + 0.5})`}
        />
      )}
    </svg>
  );
};

import React from "react";
import { cn } from "../lib/utils";

interface LogoProps {
    className?: string;
    variant?: "maroon" | "white" | "gold";
}

export default function Logo({ className, variant = "maroon" }: LogoProps) {
    const isWhite = variant === "white";

    const gold = isWhite ? "#FFFFFF" : "#C89B3C"; // Bright gold or white
    const goldLight = isWhite ? "#FFFFFF" : "#E2C37E";
    const greenLeft = isWhite ? "#FFFFFF" : "#59981A";
    const greenRight = isWhite ? "#EAEAEA" : "#3D6611";

    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                viewBox="0 0 100 120"
                className="w-full h-full drop-shadow-sm transition-transform duration-500 hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Top Mandala / Crown ornament removed as requested */}

                {/* The Golden Outer Ring */}
                <circle cx="50" cy="65" r="32" fill="none" stroke={"url(#goldGrad)"} strokeWidth="4" />
                <circle cx="50" cy="65" r="28" fill="none" stroke={gold} strokeWidth="1" opacity="0.6" />
                <circle cx="50" cy="65" r="35" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.4" />

                {/* 3 Rising Wavy Steam Lines */}
                <path d="M41 55 C 38 48, 45 42, 41 35" stroke={goldLight} strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M50 53 C 46 45, 54 39, 50 31" stroke={gold} strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M59 55 C 56 48, 63 42, 59 35" stroke={goldLight} strokeWidth="2.5" strokeLinecap="round" fill="none" />

                {/* Two Fresh Green Leaves at the bottom of the ring */}
                <path d="M22 68 Q 30 50 54 60 Q 35 85 22 68" fill={greenLeft} opacity="0.95" />
                <path d="M22 68 Q 40 58 54 60" stroke="#FFF" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />

                <path d="M38 78 Q 50 55 78 62 Q 65 90 38 78" fill={greenRight} opacity="0.95" />
                <path d="M38 78 Q 60 62 78 62" stroke="#FFF" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

                <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={isWhite ? "#FFF" : "#F3DB9A"} />
                        <stop offset="50%" stopColor={isWhite ? "#F0F0F0" : "#C89B3C"} />
                        <stop offset="100%" stopColor={isWhite ? "#DFDFDF" : "#87641B"} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

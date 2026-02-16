"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

interface FeyButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function FeyButton({
    className,
    children,
    ...props
}: FeyButtonProps) {
    return (
        <button
            className={cn(
                "group relative flex items-center justify-center",
                "h-8 whitespace-nowrap px-3 py-2",
                "text-sm font-semibold leading-tight",
                "text-white transition-all duration-300 ease-out",
                "hover:text-primary hover:scale-110",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "bg-transparent border-none appearance-none cursor-pointer p-0",
                className
            )}
            {...props}
        >
            <span className="relative z-10">
                {children}
            </span>
        </button>
    )
}

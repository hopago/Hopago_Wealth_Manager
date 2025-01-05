'use client'

import { motion } from "framer-motion";
import { zoomIn } from "../utils";
import { cn } from "@/lib/utils";

interface ZoomInProps {
    children: React.ReactNode;
    className?: string | (() => string);
    delay?: number;
    duration?: number;
}

export const ZoomIn = ({ children, className, delay = 0.75, duration = 1.75, }: ZoomInProps) => {
    const resolvedClassName =
        typeof className === "function" ? className() : className;

    return (
        <motion.div
            initial="hidden"
            animate="show"
            className={cn(
                "transition-all duration-750 ease-out",
                resolvedClassName
            )}
            variants={zoomIn(delay, duration)}
        >
            {children}
        </motion.div>
    );
};

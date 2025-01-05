'use client'

import { motion } from "framer-motion";
import { Direction, fadeIn, TransitionType } from "../utils";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string | (() => string);
    direction?: Direction;
    type?: TransitionType;
    delay?: number;
    duration?: number;
}

export const FadeIn = ({ children, className, direction = "right", type = "spring", delay = 0.25, duration = 0.75, }: FadeInProps) => {
    const resolvedClassName =
        typeof className === "function" ? className() : className;

    return (
        <motion.div
            initial="hidden"
            animate="show"
            className={cn(
                "transition-all duration-75 ease-out",
                resolvedClassName
            )}
            variants={fadeIn(direction, type, delay, duration)}
        >
            {children}
        </motion.div>
    );
};

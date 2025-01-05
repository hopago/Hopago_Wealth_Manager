'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideUpProps {
    className?: string | (() => string);
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

export const SlideUp = ({ className, children, delay = 0.25, duration = 0.75 }: SlideUpProps) => {
    return (
        <motion.div
            className={cn(
                "text-balance transition-all duration-75 ease-out",
                className,
            )}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
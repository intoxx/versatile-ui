import React, { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export function TagGrid({ children, className }: Props) {
    const ref = useRef<HTMLElement>(null); // This is null before the first render.

    // Trick to ensure the overflowing content elements gets a padding (not counted by default).
    // The issue is that it requires a re-render to be taken into consideration.
    let pr = "";
    useEffect(() => {
        const { current } = ref;

        if (current) {
            pr = window.getComputedStyle(current).getPropertyValue("padding-right");
            current.style.setProperty("--parent-pr", pr);
        }

        // Now children just have to use the --parent-pr CSS variable as a base for their calculus.
    }, [pr]);

    return (
        <article ref={ref} className={`vs-flex vs-flex-col vs-overflow-x-auto ${className}`}>
            {children}
        </article>
    );
}

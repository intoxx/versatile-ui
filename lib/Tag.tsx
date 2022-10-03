import React from "react";

interface Props {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export function Tag({ children, href, className = "" }: Props) {
    return (
        <a href={href}
           className={className}
        >
            {children}
        </a>
    );
}

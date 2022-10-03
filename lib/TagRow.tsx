import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export function TagRow({ children, className = "" }: Props) {
    return (
        <div className="vs-flex">
            <div className="vs-pr-[var(--parent-pr,0)]">
                <div className={`vs-flex ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

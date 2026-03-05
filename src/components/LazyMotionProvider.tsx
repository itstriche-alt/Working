"use client";

import { LazyMotion, domAnimation } from 'motion/react';
import React from 'react';

export default function LazyMotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
}

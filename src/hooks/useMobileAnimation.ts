"use client";

import { useEffect, useState } from 'react';

/**
 * Returns animation props optimised per device.
 *
 * Mobile  (<768px): content renders immediately — no whileInView observers,
 *                   no JS animation work during scroll.
 * Desktop (≥768px): full staggered whileInView entrance animations.
 *
 * This keeps Lighthouse scores intact while eliminating mobile scroll jank.
 */
export function useMobileAnimation() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        setIsMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    /**
     * Call with your normal desktop animation props.
     * On mobile every prop is stripped — the element renders visible immediately.
     */
    function animProps(desktopProps: {
        initial: Record<string, unknown>;
        whileInView: Record<string, unknown>;
        viewport?: Record<string, unknown>;
        transition?: Record<string, unknown>;
    }) {
        if (isMobile) {
            return {}; // no animation, no IntersectionObserver
        }
        return desktopProps;
    }

    return { isMobile, animProps };
}

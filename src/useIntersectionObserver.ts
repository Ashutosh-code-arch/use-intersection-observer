import { useEffect, useRef, useState } from "react";

interface IntersectionOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
    callback?: IntersectionCallback,
    {
        threshold = 0.1,
        root = null,
        rootMargin = "0px",
        freezeOnceVisible = false,
    }: IntersectionOptions = {}
) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<T | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!elementRef.current) return;
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                // trigger the callback
                callback?.(entry);

                if (freezeOnceVisible && entry.isIntersecting) {
                    observerRef.current?.disconnect();
                }
            },
            { threshold, root, rootMargin }
        );
        observerRef.current.observe(elementRef.current);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [callback, threshold, root, freezeOnceVisible]);

    return { elementRef, isIntersecting };
}

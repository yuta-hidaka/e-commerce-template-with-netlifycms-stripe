import { useEffect, useState } from 'react';

export const useLarge = () => {
    const [large, setLarge] = useState(false);
    const MAX_WINDOW_WIDTH = 959;

    useEffect(() => {
        if (typeof window === 'undefined') return

        setLarge(window.innerWidth > MAX_WINDOW_WIDTH);

        function handleWindowResize() {
            setLarge(window.innerWidth > MAX_WINDOW_WIDTH);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [open]);

    return large;
}

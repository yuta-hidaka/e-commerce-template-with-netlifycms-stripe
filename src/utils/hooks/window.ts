import { useEffect, useState } from 'react';

export const useLarge = () => {
    const [large, setLarge] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return

        function handleWindowResize() {
            setLarge(window.innerWidth > 959);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [open]);

    return large;
}

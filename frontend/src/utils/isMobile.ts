import { useState, useEffect } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const newIsMobile = window.innerWidth < 768;
            if (newIsMobile !== isMobile) setIsMobile(newIsMobile);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, [isMobile]);

    return isMobile;
}
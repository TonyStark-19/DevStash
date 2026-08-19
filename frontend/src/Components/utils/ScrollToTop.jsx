// import useeffect
import { useEffect } from 'react';

// import uselocation
import { useLocation } from 'react-router-dom';

// scroll to top
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // scroll to top of page on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
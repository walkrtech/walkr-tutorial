import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {window.screen.width > 767 &&
                <div className="scroll-progress-container">
                    <div
                        className="scroll-progress-bar"
                        style={{ height: `${scrollPercentage}%` }}
                    ></div>
                    <div className="rocket-container">
                        <i className="fa-solid fa-rocket" style={{ color: '#FFF' }}></i>
                    </div>
                </div>
            }
        </>
    );
};

export default ScrollProgressBar;

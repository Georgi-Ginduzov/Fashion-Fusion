import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DropboxImage from '../../dropboxImage/DropboxImage';
import "./Slideshow.css";

const delay = 2500;

export default function Slideshow({ imagePaths }) {
    const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;
    const [index, setIndex] = useState(0); 
    const timeoutRef = useRef(null); 

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex + 1) % imagePaths.length),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index, imagePaths.length]);

    // Preload images
    useEffect(() => {
        imagePaths.forEach(path => {
            const img = new Image();
            img.src = path;
        });
    }, [imagePaths]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {imagePaths.map((path, idx) => (
                    <DropboxImage key={idx} accessToken={accessToken} path={path} />
                ))}
            </div>

            <div className="slideshowDots">
                {imagePaths.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx); 
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

Slideshow.propTypes = {
    imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};
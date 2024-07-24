import { useState, useEffect, useRef } from 'react';
import Slide from "./slide/Slide";

import "./Slideshow.css";

// Delay between slides in milliseconds
const delay = 2500;

export default function Slideshow({ images }) {
    const [index, setIndex] = useState(0); // Current slide index
    const timeoutRef = useRef(null); // Reference to the timeout function

    // Function to reset the timeout
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    // Set up the interval for slide transition
    useEffect(() => {
        resetTimeout();

        // Set a timeout to change the slide
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex + 1) % images.length), // Loop to the first slide after the last
            delay
        );

        // Clean up the timeout on component unmount or when index changes
        return () => {
            resetTimeout();
        };
    }, [index, images.length]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} // Slide transition effect
            >
                {images.map((imageURL, index) => (
                    <Slide key={index} imageURL={imageURL} />
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
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

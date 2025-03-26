import React from "react";
import { useIntersectionObserver } from "../src/useIntersectionObserver";

const App = () => {
    const handleIntersection = (entry: { isIntersecting: any }) => {
        console.log("Element is visible:", entry.isIntersecting);
    };

    const { elementRef, isIntersecting } = useIntersectionObserver(
        handleIntersection,
        {
            threshold: 0.5,
            freezeOnceVisible: false,
        }
    );

    return (
        <div style={{ height: "150vh", padding: "50px" }}>
            <h1>Scroll down to see the observed element</h1>
            <div
                ref={elementRef}
                style={{
                    height: "100px",
                    background: isIntersecting ? "lightgreen" : "lightcoral",
                    marginTop: "100px",
                }}
            >
                {isIntersecting ? "I am visible!" : "Scroll down to see me"}
            </div>
        </div>
    );
};

export default App;

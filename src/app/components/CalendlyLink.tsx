"use client";
import { useEffect } from "react";

const CalendlyLink = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="mt-5 mb-1 text-center">
            <a
                href="https://calendly.com/cristhiantombe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-700 inline-block text-sm w-80 md:w-3/5"
            >
                Schedule a meeting with me
            </a>
        </div>
    );
};

export default CalendlyLink;
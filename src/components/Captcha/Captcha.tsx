import React, { useState, useEffect, useRef } from "react";

 const Captcha = () => {
    const [captcha, setCaptcha] = useState("");
    const [changeCaptcha, setChangeCaptcha] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const generateCaptcha = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    // Generate random alphanumeric string using Math.random().toString(36)
                    const captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
                    setCaptcha(captchaText);

                    // Draw text on canvas
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.font = "bold 18px Arial";
                    ctx.fillStyle = "#000000";
                    ctx.fillText(captchaText, 50, 25);

                    // Draw lines on canvas
                    for (let i = 0; i < 6; i++) {
                        ctx.strokeStyle = "#000000";
                        ctx.beginPath();
                        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                        ctx.stroke();
                    }
                }
            }
        };

        generateCaptcha();
    }, [changeCaptcha]);

    const element = (
        <div>
            <canvas ref={canvasRef} width="150" height="50"></canvas>
        </div>
    );

    return { element, captcha, setChangeCaptcha };
};

export default Captcha;
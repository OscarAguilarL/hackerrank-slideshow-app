import React from 'react';
import { useState } from 'react';

function Slides({slides}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    console.log(currentSlide);

    const handlePrevSlide = () => {
        if(currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            return;
        }
        setCurrentSlide(currentSlide);
        return;
    }

    const handleNextSlide = () => {
        if(Number(currentSlide) >= slides.length - 1) {
            console.log(currentSlide);
            setCurrentSlide(currentSlide);
            return;
        }
        setCurrentSlide(currentSlide + 1);
        return;
    };

    const handleRestart = () => {
        setCurrentSlide(0);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                  data-testid="button-restart"
                  className="small outlined"
                  onClick={handleRestart}
                  disabled={currentSlide === 0}
                >Restart</button>
                <button
                  data-testid="button-prev"
                  className="small"
                  onClick={handlePrevSlide}
                  disabled={currentSlide === 0}
                >Prev</button>
                <button
                  data-testid="button-next"
                  className="small"
                  onClick={handleNextSlide}
                  disabled={currentSlide >= slides.length - 1}
                >Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlide].title}</h1>
                <p data-testid="text">{slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;

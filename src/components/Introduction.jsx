/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef } from 'react';
import IntroImg from "../assets/intro.png";
import { init } from 'ityped';
import Lottie from 'react-lottie';
import animationData from '../lotties/coding.json';

export default function Introduction() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { showCursor: false, strings: ['Developer'], typeSpeed: 100,});
    }, []);
    const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section id="intro" data-uk-height-viewport="offset-top:true;">
            <div className="uk-container">
                <div className="uk-grid-medium uk-flex-middle" data-uk-grid data-uk-height-viewport="offset-top:true;">
                    <div className="uk-width-1-2@m" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <Lottie 
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className="uk-width-1-2@m uk-text-center" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <h3 className="uk-margin-small-medium">Hi There, I am</h3>
                        <h1 className="uk-margin-small-medium uk-margin-remove-top uk-text-bold text-blue">Melih Dizdar</h1>
                        <div className="uk-margin-small-medium uk-margin-remove-top uk-h2 uk-text-bold">
                            <span>Front-End </span><span className="uk-h2 uk-text-bold text-blue" ref={textRef}></span>
                        </div>
                        <div className="text-center" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                            <a data-uk-icon="chevron-down" href="#resume" className="uk-dark" data-uk-scroll="offset:70"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

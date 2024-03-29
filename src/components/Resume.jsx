/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export default function Resume() {
    return(
        <section className="uk-section-xsmall uk-background-primary" id="resume" data-uk-height-viewport="offset-top:true;">
            <div>
                <div className="uk-width-2-1 uk-margin-auto uk-text-center" data-uk-grid>
                    <div className="uk-width-1-1@m uk-padding-remove-left" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <div className="uk-text-large uk-margin-small-top uk-margin-small-bottom uk-text-bold uk-light">Resume</div>
                    </div>
                </div>
            </div>
            <div className="uk-grid-medium uk-width-1-3@m uk-flex-center uk-margin-auto" data-uk-grid>
                <div className="timeline" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                    <ul data-uk-scrollspy="target: > li; cls: uk-animation-fade; delay:300;">
                        <li>
                            <span>April 2022 - Current</span>
                            <div className="content">
                                <h3>Clockwork Agency - Front-End Developer</h3>
                                <div>
                                    <div className='uk-margin-bottom'>
                                        Implement user interface components and layouts, cross-browser compatible styling, add 
                                        interactions client-side. Used several technologies according to projects. 
                                    </div>
                                    <div className='uk-margin-bottom'>
                                        <b>I have completed projects;</b> Poligon İnşaat, IQ Aluminyum, Super Film, Guvenok Logistics, 
                                        Matadoor, Calista Luxury Resort, Regnum Hotels, Doxa, Sirene Hotels, Türkiye Golf Federasyonu, 
                                        Dinamis, NG Hotels, Global Ports Holding, BHM Group, Regnum Carya Golf, Akra QR, Akra Hotels, 
                                        Nef, Restra, Stork Camper, Doktar, Pablito Bistro, 251 Soul, Akra Fit, Buket Yıkama, Schloss 
                                        Lüdersburg and Ethno Hotels.
                                    </div>
                                    <div className='uk-margin-bottom'>
                                        <b>I have completed react projects;</b> Fiat Online Reservation, Alfa Romeo Reservation and Jeep 
                                        Online Reservation.
                                    </div>
                                    <div>
                                        <b>Skills:</b> React.js - Next.js - JavaScript - CSS - LESS - HTML5 - UIKit - SASS - Bootstrap - jQuery
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>September 2021 - Current</span>
                            <div className="content">
                                <h3>Anadolu University</h3>
                                <p>Licentiate degree, Management Information Systems</p>
                            </div>
                        </li>
                        <li>
                            <span>September 2018 - June 2020</span>
                            <div className="content">
                                <h3>Sakarya University of Applied Sciences</h3>
                                <p>Associate's degree, Computer Programming</p>
                                <div className='uk-margin-top'><b>Skills:</b> HTML, CSS, Bootstrap, ASP.NET, MSSQL, PHP and C# Windows Form App.</div>
                            </div>
                        </li>
                        <li>
                            <span>September 2013 - June 2017</span>
                            <div className="content">
                                <h3>İMMİB Erkan Avcı Vocational and Technical Anatolian High School</h3>
                                <p>High School Degree, Information Iechnologies - Web Design</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

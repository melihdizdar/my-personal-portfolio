/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export default function Navbar() {
    const menuClick = () => {
        let closeButton = document.querySelector('.uk-offcanvas-close');
        closeButton.click();
    }
    return(
        <header data-uk-sticky>
            <nav className="uk-navbar-container uk-background-primary uk-navbar-sticky uk-position-relative" data-uk-navbar data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item uk-link-reset uk-text-large"><a href="#intro" data-uk-scroll="offset:70">MD.</a></div>
                </div>
                <div className="uk-navbar-right">
                    <div className="uk-navbar-item">
                        <a className="uk-link-reset uk-text-large" data-uk-icon="menu" data-uk-toggle="target: #offcanvas-nav"></a>
                    </div>
                    <div id="offcanvas-nav" data-uk-offcanvas="overlay: true; flip:true; esc-close:false;">
                        <button className="uk-offcanvas-close uk-text-large" type="button" data-uk-close></button>
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical uk-text-large">
                                <li><a href="#intro" data-uk-scroll="offset:70" onClick={() => menuClick()}>Home</a></li>
                                <li><a href="#resume" data-uk-scroll="offset:70" onClick={() => menuClick()}>Resume</a></li>
                                <li><a href="#skills" data-uk-scroll="offset:70" onClick={() => menuClick()}>Skills</a></li>
                                <li><a href="#projects" data-uk-scroll="offset:70" onClick={() => menuClick()}>Projects</a></li>
                                <li><a href="#contact" data-uk-scroll="offset:70" onClick={() => menuClick()}>Contact</a></li>
                            </ul>
                            <div className="uk-flex uk-flex-center uk-flex-middle uk-light uk-hidden@m">
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="github" target='_blank' href="https://github.com/melihdizdar"></a></div>
                                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="icon:codepen; ratio:0.5;" target='_blank' href="https://codepen.io/melihdizdar/pens/showcase"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="linkedin" target='_blank' href="https://www.linkedin.com/in/melihdizdar/"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="whatsapp" target='_blank' href="tel:+905331438293"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="twitter" target='_blank' href="https://twitter.com/melihdizdarr"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="instagram" target='_blank' href="https://www.instagram.com/melihdizdarr/"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

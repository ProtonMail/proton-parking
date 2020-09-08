import React from 'react';
import SocialNetworks from '../SocialNetworks';
import '../../pages/layout.scss';
import MountainOverlay from '../../pictures/mountain-overlay.jpg';

interface Props {
    windowSize: number;
}

export default function AboutProton(props: Props) {
    return (
        <div className="about-proton flex relative">
            <div
                className="about-container flex bg-global-grey w50 onmobile-w100 p2"
                style={{ backgroundImage: props.windowSize <= 680 ? `url(${MountainOverlay})` : '' }}
            >
                <div className="mauto about-content onmobile-p2 onmobile-pr1">
                    <h2 className="about-title h1 bold">
                        About <span className="color-pm-blue">Proton</span>
                    </h2>
                    <p className="about-text">
                        We believe universal access to privacy and security makes the world a better place.
                    </p>
                    <SocialNetworks className="about-icons" />
                </div>
            </div>
            <div className="about-picture nomobile w50" style={{ backgroundImage: `url(${MountainOverlay})` }}></div>
        </div>
    );
}

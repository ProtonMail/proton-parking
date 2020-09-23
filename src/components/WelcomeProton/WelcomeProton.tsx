import React from 'react';
import '../../pages/layout.scss';
import '../SocialNetworks';
import IconArrow from '../../pictures/arrow.svg';
import SocialNetworks from '../SocialNetworks';

function WelcomeProton() {
    return (
        <div className="welcomeProton w50 onmobile-w100 relative bg-global-grey p2">
            <div className="welcomeProton-inner flex-noMinChildren flex-column flex-nowrap h100 mlauto">
                <h1 className="welcomeProton-title color-white flex-item-noshrink">
                    Welcome to <span className="color-pm-blue">Proton</span>
                </h1>
                <div className="flex-item-fluid-auto welcomeProton-description">
                    <p>
                        You've arrived at a Proton product that doesn’t exist (yet).
                    </p>
                    <p className="welcomeProton-text bold">
                        But check out these other products that respect your privacy and keep your data safe.
                    </p>
                    <div className="arrow-right-custom-container">
                        <div className="arrow-right-custom">
                            <img src={IconArrow} alt="" />
                        </div>
                    </div>
                </div>
                <SocialNetworks className="welcome-icons mtauto" />
            </div>
        </div>
    );
}

export default WelcomeProton;

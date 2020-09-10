import React from 'react';

import { classnames } from '../helpers';

import IconFb from '../pictures/icon-fb.svg';
import IconTw from '../pictures/icon-tw.svg';
import IconIg from '../pictures/icon-ig.svg';
import IconMd from '../pictures/icon-md.svg';
import IconRd from '../pictures/icon-rd.svg';

interface Props {
    className: string;
}

export default function SocialNetworks({ className = '' }: Props) {
    return (
        <ul className={classnames(['flex unstyled flex-item-noshrink m0', className])}>
            <li>
                <a
                    href="https://www.facebook.com/ProtonMail"
                    target="_blank"
                    className="pr2 ontablet-pr1"
                    title="Proton on Facebook"
                >
                    <img className="IconFb" src={IconFb} alt="Proton on Facebook" />
                </a>
            </li>
            <li>
                <a
                    href="https://twitter.com/ProtonMail"
                    target="_blank"
                    className="pr2 ontablet-pr1"
                    title="Proton on Twitter"
                >
                    <img className="IconTw" src={IconTw} alt="Proton on Twitter" />
                </a>
            </li>
            <li>
                <a
                    href="https://reddit.com/r/ProtonMail"
                    target="_blank"
                    className="pr2 ontablet-pr1"
                    title="Proton on Reddit"
                >
                    <img className="IconRd" src={IconRd} alt="Proton on Reddit" />
                </a>
            </li>
            <li>
                <a
                    href="https://instagram.com/ProtonMail"
                    target="_blank"
                    className="pr2 ontablet-pr1"
                    title="Proton on Instagram"
                >
                    <img className="IconIg" src={IconIg} alt="Proton on Instagram" />
                </a>
            </li>
            <li>
                <a
                    href="https://mastodon.social/@protonmail"
                    target="_blank"
                    className="pr2 ontablet-pr1"
                    title="Proton on Mastodon"
                >
                    <img className="IconMd" src={IconMd} alt="Proton on Mastodon" />
                </a>
            </li>
        </ul>
    );
}

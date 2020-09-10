import React, { useState, useEffect, useRef, Fragment } from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import './layout.scss';
import WelcomeProton from '../components/WelcomeProton/WelcomeProton';
import ProtonProducts from '../components/ProtonProducts/ProtonProducts';
import AboutProton from '../components/AboutProton/AboutProton';
import LogoMail from '../pictures/logo-mail.svg';
import LogoCalendar from '../pictures/logo-cal.svg';
import LogoDrive from '../pictures/logo-drive.svg';
import LogoVPN from '../pictures/logo-vpn.svg';
import SEO from '../components/seo';

interface Product {
    pic: React.ReactNode;
    title: string;
    text: string;
    logo: string;
    color: string;
    button: string;
    buttonUrl: string;
}

interface AllProducts {
    [key: string]: Product;
    mail: Product;
    vpn: Product;
    calendar: Product;
    drive: Product;
}

interface Props {
    data: {
        DPPM: {
            childImageSharp: {
                fluid: FluidObject;
            };
        };
        DPPVPN: {
            childImageSharp: {
                fluid: FluidObject;
            };
        };
        DPPC: {
            childImageSharp: {
                fluid: FluidObject;
            };
        };
        DPPD: {
            childImageSharp: {
                fluid: FluidObject;
            };
        };
    };
}

export default function Home({ data }: Props) {
    const listOfPages: string[] = ['mail', 'vpn', 'calendar', 'drive', 'about'];
    const allProducts: AllProducts = {
        mail: {
            pic: <Img fluid={data.DPPM.childImageSharp.fluid} alt="ProtonMail" />,
            title: 'ProtonMail',
            text: 'Encrypted email that respects your privacy',
            logo: LogoMail,
            color: '#657ee4',
            button: 'Learn More',
            buttonUrl: 'https://protonmail.com/',
        },
        vpn: {
            pic: <Img fluid={data.DPPVPN.childImageSharp.fluid} alt="ProtonVPN" />,
            title: 'ProtonVPN',
            text: 'High-speed VPN to access blocked content and secure your Internet connection',
            logo: LogoVPN,
            color: '#5FB364',
            button: 'Learn More',
            buttonUrl: 'https://protonvpn.com/',
        },
        calendar: {
            pic: <Img fluid={data.DPPC.childImageSharp.fluid} alt="ProtonCalendar" />,
            title: 'ProtonCalendar',
            text: 'Encrypted calendar that keeps your plans private',
            logo: LogoCalendar,
            color: '#657EE4',
            button: 'Learn More',
            buttonUrl: 'https://protonmail.com/blog/protoncalendar-beta-announcement/',
        },
        drive: {
            pic: <Img fluid={data.DPPD.childImageSharp.fluid} alt="ProtonDrive" />,
            title: 'ProtonDrive',
            text: 'Encrypted file storage on the cloud to store and backup your files safely',
            logo: LogoDrive,
            color: '#00C5B8',
            button: 'Coming Soon',
            buttonUrl: 'https://protonmail.com/blog/protondrive-security/',
        },
    };
    const [checked, setChecked] = useState('mail');
    const checkedRef = useRef(checked);
    const [windowWidth, setWidth] = useState(typeof window !== `undefined` ? window.innerWidth : 0);

    checkedRef.current = checked;

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = typeof window !== `undefined` ? window.innerWidth : 0;
            setWidth(newWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);

        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value);
    };

    return (
        <>
            <SEO title="Proton Parking Page"></SEO>
            {checked === 'about' ? (
                <AboutProton windowSize={windowWidth} />
            ) : (
                <div className="main-container flex">
                    <WelcomeProton />
                    <ProtonProducts
                        picture={allProducts[checked].pic}
                        title={allProducts[checked].title}
                        logo={allProducts[checked].logo}
                        text={allProducts[checked].text}
                        color={allProducts[checked].color}
                        button={allProducts[checked].button}
                        buttonUrl={allProducts[checked].buttonUrl}
                    />
                </div>
            )}
            <div
                className="select-product flex flex-column absolute"
                style={{ top: checked === 'about' && windowWidth <= 680 ? '10px' : '' }}
            >
                {listOfPages.map((page) => {
                    const radioText = allProducts[page] ? allProducts[page].title : 'About Proton';
                    return (
                        <Fragment key={page}>
                            <label htmlFor={page} title={radioText}>
                                <span className="sr-only">{radioText}</span>
                                <input
                                    className="select-radioButton cursor-pointer"
                                    type="radio"
                                    id={page}
                                    name={page}
                                    value={page}
                                    checked={checked === page}
                                    onChange={handleRadioChange}
                                />
                            </label>
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
}

export const query = graphql`
    {
        DPPC: file(relativePath: { eq: "DP-PC.png" }) {
            childImageSharp {
                fluid(maxWidth: 510, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        DPPD: file(relativePath: { eq: "DP-PD.png" }) {
            childImageSharp {
                fluid(maxWidth: 510, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        DPPM: file(relativePath: { eq: "DP-PM.png" }) {
            childImageSharp {
                fluid(maxWidth: 510, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        DPPVPN: file(relativePath: { eq: "DP-PVPN.png" }) {
            childImageSharp {
                fluid(maxWidth: 510, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }
`;

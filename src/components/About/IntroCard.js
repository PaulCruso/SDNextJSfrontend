import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import about1 from './../../assets/images/about1.png';
import about2 from './../../assets/images/about2.png';
import about3 from './../../assets/images/about3.png';

const PriceList = () => {
    return (
        <>
            <ul className="pricingtable-features">
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" fill="#9467FE" />
                    </svg>
                    <span>Review Your Question</span>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" fill="#9467FE" />
                    </svg>
                    <span>Analysis of Your "I Have"</span>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" fill="#9467FE" />
                    </svg>
                    <span>Work with Resources</span>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" fill="#9467FE" />
                    </svg>
                    <span>Analysis of Your "I Have"</span>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" fill="#9467FE" />
                    </svg>
                    <span>Support & Mentoring</span>
                </li>
            </ul>
        </>
    )
}



const cardData = [
    { image: about1, title: 'Joshua Freedman', subtitle: 'Founder & Leader', desc: 'Founder Josh owned a brokerage that operated in over 7 states.He’s a graduate of the University of Pittsburgh in pre-law, and has always been a geek. ', percent: '-1.26' },
    { image: about2, title: 'David Anglero', subtitle: 'CoFounder', desc: 'Part of multi-faceted team of tech professionals partnered with Guerrilla experience. Whether it’s new technology, real estate lending, or value add real estate hurdles.', percent: '-1.55' },
    { image: about3, title: 'Umair Riaz', subtitle: 'Blockchian Lead dev', desc: 'Blockchian Developer/consultant. Graduate of the University of Engineering and Technology Lahore and University of the Punjab Lahore, Pakistan in computer Engineering and Mathematics ', percent: '0.0099' },
];

const pricingBlog = [
    { price: '11', title: 'Lite', title2: 'Life-includes:' },
    { price: '21', title: 'Pro', content: <div className="tagline">POPULER</div>, title2: 'Everythings in Lite, Plus' },
    { price: '32', title: 'Ultimate', title2: 'Everythings in Lite' },
];

const IntroCard = () => {
    const [hovered, setHovered] = useState('0');
    return (
        <>
            {cardData.map((data, index) => (
                <div className="col-xl-4 col-lg-6 col-md-6 m-b30" key={index}>
                    <div className={`pricingtable-wrapper box-hover style-1 ${index == hovered ? "active" : ""}`}
                        onMouseEnter={() => { setHovered(index) }}
                    >
                        <div className="pricingtable-inner">
                            {data.content}
                            <h4 className="pricingtable-title">
                                {index === 0 ?
                                <></>
                                    // <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    //     <path d="M27.8654 11.2886C27.6617 10.8975 27.2671 10.6642 26.8314 10.6796L23.6728 10.7919L23.5637 9.31193C23.5308 8.86584 23.2567 8.4879 22.8484 8.32559C22.4509 8.16754 22.0059 8.24984 21.6879 8.54073L19.0979 10.9085L20.3531 5.72125C20.4581 5.28742 20.3136 4.84117 19.976 4.55668C19.651 4.2828 19.2077 4.21712 18.8194 4.38491L16.866 5.22928L15.0274 1.06597C14.8427 0.647938 14.4491 0.388336 13.9998 0.388336C13.5507 0.388336 13.157 0.648048 12.9725 1.06602L11.1339 5.22928L9.18048 4.38491C8.79214 4.21702 8.34896 4.28297 8.02395 4.55668C7.68631 4.84111 7.54177 5.28731 7.64677 5.72125L8.90201 10.9087L6.3119 8.54073C5.99383 8.2499 5.54911 8.16754 5.15132 8.32559C4.74296 8.4879 4.46887 8.86584 4.43606 9.31193L4.32701 10.7919L1.16842 10.6796C0.734964 10.6643 0.338151 10.8974 0.13433 11.2886C-0.0763263 11.6928 -0.0374981 12.1691 0.235557 12.5318L2.22597 15.1748L1.01836 16.269C0.723644 16.5361 0.588238 16.9323 0.656324 17.3289C0.72348 17.7205 0.978762 18.0443 1.33893 18.1951L6.24119 20.2469L5.64542 21.314C5.46747 21.6327 5.44936 22.0228 5.59697 22.3574C5.74298 22.6882 6.02539 22.9247 6.37183 23.006L13.3557 24.6458V24.6854V26.9676C13.3557 27.3233 13.6441 27.6116 13.9997 27.6116C14.3555 27.6116 14.6438 27.3232 14.6438 26.9676V24.6854V24.6455L21.6262 23.006C21.9726 22.9247 22.2551 22.6882 22.401 22.3574C22.5486 22.0228 22.5305 21.6327 22.3526 21.314L21.7572 20.2473L26.6604 18.1951C27.0206 18.0443 27.2759 17.7205 27.3431 17.3289C27.4111 16.9323 27.2757 16.5361 26.981 16.269L25.7734 15.1748L27.7638 12.5319C28.0373 12.1691 28.0761 11.6927 27.8654 11.2886ZM24.6777 14.4887C24.3186 14.9656 24.3823 15.6521 24.8231 16.0515L25.9677 17.0886L20.6236 19.3254C20.4952 19.372 20.3824 19.4592 20.3047 19.5776C20.1731 19.7782 20.1639 20.0353 20.2809 20.2448L21.1465 21.7954L14.644 23.3221V19.7742L20.4372 16.3713C20.744 16.1912 20.8465 15.7965 20.6664 15.4897C20.4863 15.1831 20.0918 15.0803 19.7848 15.2606L14.644 18.2802V10.4398C14.644 10.084 14.3557 9.7957 14 9.7957C13.6444 9.7957 13.3559 10.0841 13.3559 10.4398V18.2988L8.18353 15.2606C7.87684 15.0805 7.48205 15.1831 7.30196 15.4898C7.12177 15.7965 7.22436 16.1912 7.5311 16.3714L13.3559 19.7928V23.3225L6.8521 21.7955L7.71781 20.2449C7.86109 19.9883 7.81231 19.6671 7.59935 19.4645C7.53772 19.4058 7.46679 19.3613 7.39127 19.3316L2.03237 17.0887L3.17704 16.0516C3.61771 15.6522 3.68148 14.9657 3.32229 14.4887L1.43136 11.9778L4.43863 12.0848C5.04746 12.1068 5.55628 11.6392 5.60194 11.0209L5.69748 9.72411L9.58976 13.2825C9.82388 13.4966 10.1789 13.5082 10.4265 13.31C10.6289 13.1482 10.7103 12.8857 10.6476 12.6449L8.966 5.69544L10.7817 6.48032C11.3412 6.72225 11.9992 6.45893 12.2487 5.89374L14 1.92807L15.7512 5.89368C16.0008 6.45893 16.6588 6.72209 17.2182 6.48032L19.0339 5.69544L17.3539 12.6385C17.2945 12.8581 17.3539 13.1016 17.5275 13.2698C17.7721 13.5067 18.1589 13.5123 18.4102 13.2825L22.3025 9.72406L22.398 11.0209C22.4437 11.6391 22.9537 12.1059 23.5612 12.0848L26.5686 11.9778L24.6777 14.4887Z" fill="#9467FE" />
                                    // </svg>
                                    : index === 1 ?
                                        <></>

                                        // <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        //     <g clipPath="url(#clip0_13_226)">
                                        //     <path d="M9.89844 16.4609C9.44541 16.4609 9.07812 16.8282 9.07812 17.2812V18.9219C9.07812 19.3749 9.44541 19.7422 9.89844 19.7422C10.3515 19.7422 10.7188 19.3749 10.7188 18.9219V17.2812C10.7188 16.8282 10.3515 16.4609 9.89844 16.4609Z" fill="#9467FE"/>
                                        //     <path d="M18.1016 19.7422C18.5546 19.7422 18.9219 19.3749 18.9219 18.9219V17.2812C18.9219 16.8282 18.5546 16.4609 18.1016 16.4609C17.6485 16.4609 17.2812 16.8282 17.2812 17.2812V18.9219C17.2812 19.3749 17.6485 19.7422 18.1016 19.7422Z" fill="#9467FE"/>
                                        //     <path d="M14.875 5.79688H23.8438C24.2968 5.79688 24.6641 5.42959 24.6641 4.97656C24.6641 4.52353 24.2968 4.15625 23.8438 4.15625H14.875C14.422 4.15625 14.0547 4.52353 14.0547 4.97656C14.0547 5.42959 14.422 5.79688 14.875 5.79688Z" fill="#9467FE"/>
                                        //     <path d="M28 9.625V3.55469C28 1.59463 26.4054 0 24.4453 0H14.2734C12.3134 0 10.7188 1.59463 10.7188 3.55469V9.89844H9.625C6.62665 9.89844 4.11201 12.0077 3.48605 14.8203H3.33594V9.75734C4.29073 9.41872 4.97656 8.50691 4.97656 7.4375C4.97656 6.08054 3.87259 4.97656 2.51562 4.97656C1.15866 4.97656 0.0546875 6.08054 0.0546875 7.4375C0.0546875 8.50691 0.740523 9.41872 1.69531 9.75734V14.9429C0.712195 15.2656 0 16.1915 0 17.2812V20.5625C0 21.9195 1.10398 23.0234 2.46094 23.0234H3.47413C4.07947 25.8633 6.60723 28 9.625 28H18.375C21.3928 28 23.9205 25.8633 24.5259 23.0234H25.5391C26.896 23.0234 28 21.9195 28 20.5625V17.2812C28 15.9243 26.896 14.8203 25.5391 14.8203H24.5136C24.3861 14.2472 24.1792 13.695 23.8985 13.1797H24.4453C26.4054 13.1797 28 11.5851 28 9.625ZM12.3594 3.55469C12.3594 2.49927 13.218 1.64062 14.2734 1.64062H24.4453C25.5007 1.64062 26.3594 2.49927 26.3594 3.55469V9.625C26.3594 10.6804 25.5007 11.5391 24.4453 11.5391H14.8203C14.6929 11.5391 14.5674 11.5687 14.4535 11.6256L12.3594 12.6727V3.55469ZM2.51562 6.61719C2.96795 6.61719 3.33594 6.98518 3.33594 7.4375C3.33594 7.88982 2.96795 8.25781 2.51562 8.25781C2.0633 8.25781 1.69531 7.88982 1.69531 7.4375C1.69531 6.98518 2.0633 6.61719 2.51562 6.61719ZM1.64062 20.5625V17.2812C1.64062 16.8289 2.00862 16.4609 2.46094 16.4609H3.33594V21.3828H2.46094C2.00862 21.3828 1.64062 21.0148 1.64062 20.5625ZM26.3594 17.2812V20.5625C26.3594 21.0148 25.9914 21.3828 25.5391 21.3828H24.6641V16.4609H25.5391C25.9914 16.4609 26.3594 16.8289 26.3594 17.2812ZM23.0234 16.1875V21.7109C23.0234 24.2741 20.9381 26.3594 18.375 26.3594H9.625C7.06185 26.3594 4.97656 24.2741 4.97656 21.7109V16.1875C4.97656 13.6244 7.06185 11.5391 9.625 11.5391H10.7188V14C10.7188 14.6088 11.3609 15.0062 11.9059 14.7337L15.014 13.1797H21.9178C22.6308 14.0188 23.0234 15.083 23.0234 16.1875Z" fill="#9467FE"/>
                                        //     <path d="M14.875 9.07812H23.8438C24.2968 9.07812 24.6641 8.71084 24.6641 8.25781C24.6641 7.80478 24.2968 7.4375 23.8438 7.4375H14.875C14.422 7.4375 14.0547 7.80478 14.0547 8.25781C14.0547 8.71084 14.422 9.07812 14.875 9.07812Z" fill="#9467FE"/>
                                        //     <path d="M11.5391 22.2031C11.5391 22.6562 11.9063 23.0234 12.3594 23.0234H15.6406C16.0937 23.0234 16.4609 22.6562 16.4609 22.2031C16.4609 21.7501 16.0937 21.3828 15.6406 21.3828H12.3594C11.9063 21.3828 11.5391 21.7501 11.5391 22.2031Z" fill="#9467FE"/>
                                        //     </g>
                                        //     <defs>
                                        //     <clipPath id="clip0_13_226">
                                        //     <rect width="28" height="28" fill="white"/>
                                        //     </clipPath>
                                        //     </defs>
                                        // </svg>
                                        : index === 2 ?
                                        <></>
                                            // <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            //     <path d="M7.01937 28C6.91043 28 6.80018 27.9782 6.69485 27.9328C6.3262 27.7738 6.12681 27.3714 6.22361 26.9818L8.99757 15.8158H1.52346C1.25292 15.8158 0.999772 15.6825 0.846811 15.4593C0.693851 15.2361 0.660765 14.9519 0.758382 14.6996L6.24144 0.524396C6.36366 0.208359 6.66762 0 7.00646 0H14.5512C14.8284 0 15.0868 0.139999 15.2383 0.372202C15.3897 0.604404 15.4136 0.897364 15.3019 1.15106L12.0551 8.52072H18.4765C18.7765 8.52072 19.0526 8.6845 19.1964 8.94782C19.3402 9.21109 19.3289 9.53188 19.1667 9.78432L7.70996 27.6229C7.55503 27.8642 7.29154 28 7.01937 28ZM2.72029 14.1753H10.0466C10.299 14.1753 10.5373 14.2915 10.6928 14.4903C10.8482 14.6891 10.9035 14.9484 10.8427 15.1934L9.01315 22.5578L16.9747 10.1613H10.7973C10.5201 10.1613 10.2617 10.0213 10.1102 9.78908C9.95881 9.55688 9.93485 9.26392 10.0466 9.01028L13.2934 1.64062H7.5687L2.72029 14.1753Z" fill="#9467FE" />
                                            // </svg>
                                            :
                                            ""
                                }
                                {" "} {data.subtitle}
                            </h4>
                            <div className="pricingtable-price">
                                <h2 className="pricingtable-bx text-primary"> <span>
                                    <img width="80" height="80" src={data.image} alt="" />
                                </span>{data.price}<small>{data.title}</small></h2>
                                <div className="days-label bg-primary">Linkdin</div>
                                <h6>{data.desc}</h6>
                            </div>
                            {/* <PriceList /> */}
                        </div>
                        <div className="pricingtable-footer">
                            <Link to={"/contact-us"} className="btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            ))}



            {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                <div className="pricingtable-wrapper box-hover style-1"
                    // onMouseEnter={()=>handleChangeTheme('dark-theme')}
                >
                    <div className="pricingtable-inner">
                        <div className="tagline">POPULER</div>
                        <h4 className="pricingtable-title">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_13_226)">
                                <path d="M9.89844 16.4609C9.44541 16.4609 9.07812 16.8282 9.07812 17.2812V18.9219C9.07812 19.3749 9.44541 19.7422 9.89844 19.7422C10.3515 19.7422 10.7188 19.3749 10.7188 18.9219V17.2812C10.7188 16.8282 10.3515 16.4609 9.89844 16.4609Z" fill="#9467FE"/>
                                <path d="M18.1016 19.7422C18.5546 19.7422 18.9219 19.3749 18.9219 18.9219V17.2812C18.9219 16.8282 18.5546 16.4609 18.1016 16.4609C17.6485 16.4609 17.2812 16.8282 17.2812 17.2812V18.9219C17.2812 19.3749 17.6485 19.7422 18.1016 19.7422Z" fill="#9467FE"/>
                                <path d="M14.875 5.79688H23.8438C24.2968 5.79688 24.6641 5.42959 24.6641 4.97656C24.6641 4.52353 24.2968 4.15625 23.8438 4.15625H14.875C14.422 4.15625 14.0547 4.52353 14.0547 4.97656C14.0547 5.42959 14.422 5.79688 14.875 5.79688Z" fill="#9467FE"/>
                                <path d="M28 9.625V3.55469C28 1.59463 26.4054 0 24.4453 0H14.2734C12.3134 0 10.7188 1.59463 10.7188 3.55469V9.89844H9.625C6.62665 9.89844 4.11201 12.0077 3.48605 14.8203H3.33594V9.75734C4.29073 9.41872 4.97656 8.50691 4.97656 7.4375C4.97656 6.08054 3.87259 4.97656 2.51562 4.97656C1.15866 4.97656 0.0546875 6.08054 0.0546875 7.4375C0.0546875 8.50691 0.740523 9.41872 1.69531 9.75734V14.9429C0.712195 15.2656 0 16.1915 0 17.2812V20.5625C0 21.9195 1.10398 23.0234 2.46094 23.0234H3.47413C4.07947 25.8633 6.60723 28 9.625 28H18.375C21.3928 28 23.9205 25.8633 24.5259 23.0234H25.5391C26.896 23.0234 28 21.9195 28 20.5625V17.2812C28 15.9243 26.896 14.8203 25.5391 14.8203H24.5136C24.3861 14.2472 24.1792 13.695 23.8985 13.1797H24.4453C26.4054 13.1797 28 11.5851 28 9.625ZM12.3594 3.55469C12.3594 2.49927 13.218 1.64062 14.2734 1.64062H24.4453C25.5007 1.64062 26.3594 2.49927 26.3594 3.55469V9.625C26.3594 10.6804 25.5007 11.5391 24.4453 11.5391H14.8203C14.6929 11.5391 14.5674 11.5687 14.4535 11.6256L12.3594 12.6727V3.55469ZM2.51562 6.61719C2.96795 6.61719 3.33594 6.98518 3.33594 7.4375C3.33594 7.88982 2.96795 8.25781 2.51562 8.25781C2.0633 8.25781 1.69531 7.88982 1.69531 7.4375C1.69531 6.98518 2.0633 6.61719 2.51562 6.61719ZM1.64062 20.5625V17.2812C1.64062 16.8289 2.00862 16.4609 2.46094 16.4609H3.33594V21.3828H2.46094C2.00862 21.3828 1.64062 21.0148 1.64062 20.5625ZM26.3594 17.2812V20.5625C26.3594 21.0148 25.9914 21.3828 25.5391 21.3828H24.6641V16.4609H25.5391C25.9914 16.4609 26.3594 16.8289 26.3594 17.2812ZM23.0234 16.1875V21.7109C23.0234 24.2741 20.9381 26.3594 18.375 26.3594H9.625C7.06185 26.3594 4.97656 24.2741 4.97656 21.7109V16.1875C4.97656 13.6244 7.06185 11.5391 9.625 11.5391H10.7188V14C10.7188 14.6088 11.3609 15.0062 11.9059 14.7337L15.014 13.1797H21.9178C22.6308 14.0188 23.0234 15.083 23.0234 16.1875Z" fill="#9467FE"/>
                                <path d="M14.875 9.07812H23.8438C24.2968 9.07812 24.6641 8.71084 24.6641 8.25781C24.6641 7.80478 24.2968 7.4375 23.8438 7.4375H14.875C14.422 7.4375 14.0547 7.80478 14.0547 8.25781C14.0547 8.71084 14.422 9.07812 14.875 9.07812Z" fill="#9467FE"/>
                                <path d="M11.5391 22.2031C11.5391 22.6562 11.9063 23.0234 12.3594 23.0234H15.6406C16.0937 23.0234 16.4609 22.6562 16.4609 22.2031C16.4609 21.7501 16.0937 21.3828 15.6406 21.3828H12.3594C11.9063 21.3828 11.5391 21.7501 11.5391 22.2031Z" fill="#9467FE"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_13_226">
                                <rect width="28" height="28" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            {" "} Pro
                        </h4>
                        <p>Perfect to get started</p>
                        <div className="pricingtable-price">
                            <h2 className="pricingtable-bx text-primary"> <span>$</span>21<small>/ Per Month</small></h2>
                            <div className="days-label bg-primary">Try 7 Days for free</div>
                            <h6>Everythings in Lite, Plus</h6>
                        </div>
                        <PriceList />
                    </div>
                    <div className="pricingtable-footer">
                        <Link to={"/contact-us"} className="btn">See all features</Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                <div className="pricingtable-wrapper box-hover style-1">
                    <div className="pricingtable-inner">
                        <h4 className="pricingtable-title">
                            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.01937 28C6.91043 28 6.80018 27.9782 6.69485 27.9328C6.3262 27.7738 6.12681 27.3714 6.22361 26.9818L8.99757 15.8158H1.52346C1.25292 15.8158 0.999772 15.6825 0.846811 15.4593C0.693851 15.2361 0.660765 14.9519 0.758382 14.6996L6.24144 0.524396C6.36366 0.208359 6.66762 0 7.00646 0H14.5512C14.8284 0 15.0868 0.139999 15.2383 0.372202C15.3897 0.604404 15.4136 0.897364 15.3019 1.15106L12.0551 8.52072H18.4765C18.7765 8.52072 19.0526 8.6845 19.1964 8.94782C19.3402 9.21109 19.3289 9.53188 19.1667 9.78432L7.70996 27.6229C7.55503 27.8642 7.29154 28 7.01937 28ZM2.72029 14.1753H10.0466C10.299 14.1753 10.5373 14.2915 10.6928 14.4903C10.8482 14.6891 10.9035 14.9484 10.8427 15.1934L9.01315 22.5578L16.9747 10.1613H10.7973C10.5201 10.1613 10.2617 10.0213 10.1102 9.78908C9.95881 9.55688 9.93485 9.26392 10.0466 9.01028L13.2934 1.64062H7.5687L2.72029 14.1753Z" fill="#9467FE"/>
                            </svg>
                            {" "} Ultimate
                        </h4>
                        <p>Perfect to get started</p>
                        <div className="pricingtable-price">
                            <h2 className="pricingtable-bx text-primary"> <span>$</span>32<small>/ Per Month</small></h2>
                            <div className="days-label bg-primary">Try 7 Days for free</div>
                            <h6>Everythings in Lite</h6>
                        </div>
                        <PriceList />
                    </div>
                    <div className="pricingtable-footer">
                      <Link to={"/contact-us"} className="btn">See all features</Link>
                    </div>
                </div>
            </div>  */}
        </>
    )
}
export default IntroCard;
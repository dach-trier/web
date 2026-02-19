"use client";

import styles from "./styles.module.css";
import { RefObject, useRef } from "react";
import { Carousel, CarouselSlide } from "@dach/ui";
import { DachLogo, HeartIcon } from "@dach/svg";
import { useIntersectionObserver } from "@dach/utils";

import Section from "./section";

type HeaderProps = {
    showLogo?: boolean | undefined;
    showDonationButton?: boolean | undefined;
};

const Header = (props: HeaderProps) => {
    return (
        <div className={styles["header"]}>
            <div>
                <DachLogo
                    style={{ opacity: props.showLogo ?? true ? 1 : 0 }}
                    className={styles["logo"]}
                />
            </div>

            <div className={styles["links"]}>
                <span>Арт Майстерня</span>
                <span>Берегиня</span>
                <span>Табір</span>
                <span>Музичний Бенд</span>
            </div>

            <div>
                <HeartIcon
                    className={styles["donate"]}
                    width="30px"
                    fill="red"
                    stroke="red"
                    style={{
                        opacity: props.showDonationButton ?? true ? 1 : 0,
                    }}
                />
            </div>
        </div>
    );
};

const Posts = () => {
    return (
        <Carousel className={styles["posts"]}>
            {Array.from({ length: 5 }).map((_, index) => {
                return (
                    <CarouselSlide key={index} className={styles["slide"]}>
                        <div>{index}</div>
                    </CarouselSlide>
                );
            })}
        </Carousel>
    );
};

const ContactUs = () => {
    return (
        <div className={styles["contact-us"]}>
            <h1>Contact Us</h1>
            <form>
                <input value="info@dach-trier.com" disabled />
                <input placeholder="your email" />
                <textarea placeholder="additional info" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <span>
                Copyright (c) 2026 «DACH» e.V. Trier. All Rights Reserved.
            </span>

            <span>Designed and developed by @hiegz</span>
        </div>
    );
};

/**
 * Custom Intersection Observer hook that accounts
 * for a sticky <Header /> offset.
 */
function useCustomIntersectionObserver<T extends HTMLElement>(
    ref: RefObject<T | null>
) {
    return useIntersectionObserver(ref, {
        initial: true,
        rootMargin: "-48px 0px 0px 0px",
    });
}

export default function Page() {
    const logoRef = useRef(null);
    const buttonGroupRef = useRef(null);
    const logoInView = useCustomIntersectionObserver(logoRef);
    const buttonGroupInView = useCustomIntersectionObserver(buttonGroupRef);

    return (
        <>
            <Header
                showLogo={!logoInView}
                showDonationButton={!buttonGroupInView}
            />

            <div className={styles["hero"]}>
                <DachLogo ref={logoRef} className={styles["logo"]} />

                <div className="h-10" />

                <h1>Українсько-німецький ферайн «Дах»</h1>

                <div className="h-5" />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis pretium sapien risus, ut malesuada nisi facilisis quis
                </p>

                <div className="h-8" />

                <div ref={buttonGroupRef} className={styles["button-group"]}>
                    <button>Зв'язатися з нами</button>
                    <button>
                        <HeartIcon className={styles["heart-icon"]} />
                        <span>Підтримати</span>
                    </button>
                </div>
            </div>

            <Posts />

            <Section
                heading="Арт Майстерня"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="end"
            />
            <Section
                heading="Берегиня"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="start"
            />
            <Section
                heading="Табір"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="end"
            />
            <Section
                heading="Музичний Бенд"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="start"
            />
            <div className="h-40" />
            <ContactUs />
            <div className="h-40" />
            <Footer />
        </>
    );
}

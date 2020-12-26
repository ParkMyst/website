import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import SmoothScroll from "../smooth-scroll";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    const [transparent, setTransparent] = useState<boolean>(true);

    const handleScroll = () => {
        const distance = document
            .querySelector(`#Discover`)
            ?.getBoundingClientRect().top;
        if (distance && distance < 120) {
            setTransparent(false);
        } else {
            setTransparent(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const classes = [style.header];
    if (!transparent) {
        classes.push(style.solidHeader);
    }

    return (
        <header class={classes.join(" ")}>
            <img src="../../assets/parkmyst_logo.png" />
            <nav>
                <SmoothScroll scrollToId="Title">Discover</SmoothScroll>
                <SmoothScroll scrollToId="AboutUs">About us</SmoothScroll>
                <SmoothScroll scrollToId="ContactUs">Contact</SmoothScroll>
                <SmoothScroll scrollToId="HowToPlay">Play</SmoothScroll>
            </nav>
            <div>
                <a href="https://play.parkmyst.hu">Login</a>
            </div>
        </header>
    );
};

export default Header;

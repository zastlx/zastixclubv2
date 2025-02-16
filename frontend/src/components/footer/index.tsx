import useIsMobile from "../../utils/isMobile";
import styles from "./index.module.scss";
import { Social } from "./social";

interface Social {
    name: string;
    link: string;
    icon: string;
}

export default function Footer() {
    const isMobile = useIsMobile();

    const socials = [
        {
            name: "Github",
            link: "https://github.com/zastlx",
            icon: "fa-brands fa-github",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/notzastix",
            icon: "fa-brands fa-twitter",
        },
        {
            name: "Discord",
            link: "https://discord.gg/cuzmWS67gJ",
            icon: "fa-brands fa-discord",
        },
        {
            name: "Reddit",
            link: "https://reddit.com/u/zastixx",
            icon: "fa-brands fa-reddit",
        },
        {
            name: "Youtube",
            link: "https://youtube.com/@zastix",
            icon: "fa-brands fa-youtube",
        },
        // {
        //     name: "Blacket",
        //     link: "https://blacket.org/stats?name=zastix",
        //     icon: "fa-sharp fa-solid fa-b",
        // }
    ] satisfies Social[];

    return (
        <footer className={styles.footer}>
            {!isMobile && <div>
                <div>
                    {socials.map((social, index) => (<Social key={index} {...social} />))}
                </div>
            </div>}
            <p>made by zastix with ❤️</p>
        </footer>
    )
}
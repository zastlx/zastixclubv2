import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import homeStyles from "../../views/home/index.module.scss";
import Button from "./button";
import useIsMobile from "../../utils/isMobile";

export default function Header() {
    const isMobile = useIsMobile();
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div>
                {(isMobile && location.pathname === "/") && (
                    <div className={homeStyles.pfp}>
                        <img style={{
                            width: "200px",
                            borderRadius: "50%",

                        }} src="/pfp.png" />
                    </div>
                )}
                <h1 className={styles.username}><p><Link to="/">zastix</Link></p></h1>
                <p className={styles.desc}>software developer, reverse engineer, <span>
                    <span className={styles.blue}>t</span>
                    <span className={styles.blue}>r</span>
                    <span className={styles.pink}>a</span>
                    <span className={styles.pink}>n</span>
                    <span className={styles.white}>s</span>
                    <span className={styles.white}>f</span>
                    <span className={styles.pink}>e</span>
                    <span className={styles.pink}>m</span>
                    <span className={styles.blue}>m</span>
                    <span className={styles.blue}>e</span></span>
                </p>
            </div>
            <div className={styles.buttons}>
                <Button to="/">Home</Button>
                <Button to="/projects">Projects</Button>
                {/* <Button to="/blog">Blog</Button> */}
                {/* <Button to="/contact">Contact</Button> */}
            </div>
        </header>
    )
}
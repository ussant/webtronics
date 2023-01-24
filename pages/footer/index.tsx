import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGitlab } from 'react-icons/fa';
import styles from "../../styles/Footer.module.css";

const Index = (): JSX.Element => {
    return (
        <footer className={styles.container}>
            <div className={styles.block1}>
                <div className={styles.infoBar}>
                    <img className={styles.logo} src={"logo.png"} alt={"logo"} />
                    <h4>WEBTRONICS</h4>
                </div>
                <p>Wisconsin Ave, Suite 700<br />
                    Chevy Chase, Maryland 20815</p>
            </div>
            <div>
                <h5 className={styles.headText}>Company</h5>
                    <a className={styles.itemLink} href={"#aboutUs"}><p className={styles.item}>About Us</p></a>
                    <a className={styles.itemLink} href={"#steps"}><p className={styles.item}>Steps</p></a>
                    <a className={styles.itemLink} href={"#questions"}><p className={styles.item}>FAQs</p></a>
            </div>
            <div className={styles.block3}>
                <a className={styles.itemLink} href={"#review"}><p className={styles.item}>Review</p></a>
                <a className={styles.itemLink} href={"#gallery"}><p className={styles.item}>Gallery</p></a>
            </div>
            <div className={styles.block4}>
                <h5 className={styles.headText}>Social Media</h5>
                <div className={styles.icons}>
                    <FaFacebook />
                    <FaGitlab />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </footer>
    );
};

export default Index;

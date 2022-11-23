import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Copyright &#169; 2022 Purple Panda Filipino Food</p>
        <a
          href="https://paulcmelton.com/contact"
          className={styles["footer-brand"]}
          target="_blank"
          rel="noreferrer"
        >
          Website Created by PaulCMelton.com
        </a>
      </div>
      <div className={styles["footer-info"]}>
        <p>purplepandafilipinofood@gmail</p>
        <p>417.791.1529</p>
      </div>
    </div>
  );
};
export default Footer;

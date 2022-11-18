import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright &#169; 2022 Purple Panda Filipino Food</p>
      <div className={styles["footer-info"]}>
        <p>purplepandafilipinofood@gmail</p>
        <p>417.791.1529</p>
      </div>
    </div>
  );
};
export default Footer;

import styles from "./Slide.module.css";

function Slide({ children }) {
  return (
    <div className={styles.slide}>
      {children}
    </div>
  );
}

export default Slide;
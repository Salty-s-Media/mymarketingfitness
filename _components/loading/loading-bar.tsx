import styles from "./loading.module.css";

export const LoadingBar = () => {
  return (
    <div className={styles.loadingcont}>
      <div className={styles.loadingbar}></div>
    </div>
  );
};

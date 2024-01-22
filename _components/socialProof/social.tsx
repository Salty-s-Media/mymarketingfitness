import styles from "./social.module.css";

const Social = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className={styles.socialProof}>
        <div className={styles.stars}>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <p className={styles.rating}>
          Marketing Fitness rated 4.9/5 by 400+ home improvement companies
        </p>
      </div>
    </>
  );
};

export default Social;

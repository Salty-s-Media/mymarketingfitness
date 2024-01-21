import styles from "./video.module.css";

export const Video = () => {
  return (
    <>
      <div className={styles.videocontainer}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/eSFniRTml8U?si=NuXHQQVrJ47A9JZf&rel=0;autoplay=1;showinfo=0;"
          frameBorder={0}
          title="Hero Video"
          allowFullScreen
          className={styles.videoplayer}
        />
      </div>
    </>
  );
};

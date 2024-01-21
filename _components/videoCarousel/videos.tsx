"use client";

import React, { useState } from "react";
import VideoPlayer from "./videoPlayer";
import styles from "./videos.module.css";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";

type Video = {
  src: string;
};

interface VideoCarouselProps {
  videos: Video[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const videoStyles = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: "transform 0.5s ease",
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner} style={videoStyles}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <VideoPlayer src={video.src} />
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          aria-label="prev Video"
          className={styles.prevButton}
          onClick={prevSlide}
        >
          <ArrowLeftSquare />
        </button>
        <button
          aria-label="next Video"
          className={styles.nextButton}
          onClick={nextSlide}
        >
          <ArrowRightSquare />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;

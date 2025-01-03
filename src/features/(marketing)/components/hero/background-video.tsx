export const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover filter brightness-50 saturate-150"
      preload="metadata"
    >
      <source src="/videos/video-hero.mp4" type="video/mp4" />
    </video>
  );
};

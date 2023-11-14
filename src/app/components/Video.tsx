const Video = () => {
  return (
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        className="min-w-full min-h-full absolute object-cover opacity-5 blur-sm"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;

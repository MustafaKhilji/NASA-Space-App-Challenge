export default function HeroVid() {
  return (
    <div>
      <div className="video">
        <video width="700" height="450" controls preload="none">
          <source src="/herovid.mp4" type="video/mp4" />
          <track
            src="/herovid.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

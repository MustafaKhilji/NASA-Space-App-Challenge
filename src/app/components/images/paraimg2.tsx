import Image from "next/image";
export default function SndParaImg() {
  return (
    <div>
      <div className="img">
        <Image
          id="img1"
          className="paraImg"
          src="/scoranemilcen.jpg"
          width={800}
          height={400}
          alt="Scoranemilcent creation found exotically in deep-dark-ocean"
        />
      </div>
    </div>
  );
}

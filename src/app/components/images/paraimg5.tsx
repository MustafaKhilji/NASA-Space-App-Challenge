import Image from "next/image";
export default function FfthParaImg() {
  return (
    <div>
      <div className="img">
        <Image
          id="img1"
          className="paraImg"
          src="/cmpltplanet.jpg"
          width={800}
          height={400}
          alt="Jupiter moon"
        />
      </div>
    </div>
  );
}
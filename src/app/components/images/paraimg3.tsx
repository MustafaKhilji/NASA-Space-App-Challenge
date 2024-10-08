import Image from "next/image";
export default function TrdParaImg() {
  return (
    <div>
      <div className="img">
        <Image
          id="img1"
          className="paraImg"
          src="/octalene.jpg"
          width={800}
          height={400}
          alt="Octalene"
        />
      </div>
    </div>
  );
}
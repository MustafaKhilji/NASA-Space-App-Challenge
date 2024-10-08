import Image from "next/image";
export default function FstParaImg() {
  return (
    <div>
      <div className="img">
        <Image
          id="img1"
          className="paraImg"
          src="/volerupt.jpg"
          width={800}
          height={400}
          alt="Volcanic eruption supports chemosynthesis"
        />
      </div>
    </div>
  );
}

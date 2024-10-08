import Image from "next/image";

export default function HeaderBar() {
  return (
    <div>
      <Image id="heroImg" src="/hero.jpg" width={1530} height={100} alt="Futuristic Planet" />
    </div>
  );
}

import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width="30"
      height="30"
      className="mr-2 rounded-sm"
    ></Image>
  );
}

export { Logo };

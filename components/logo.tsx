import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/clogo.png"
      alt="logo"
      width="200"
      height="125"
      className="mr-2"
    ></Image>
  );
}

export { Logo };

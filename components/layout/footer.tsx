import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-32 flex flex-col items-center space-y-8 border-t-[0.5px] py-12">
      <Image
        src="/logo.png"
        alt="Precedent logo"
        width="30"
        height="30"
        className="mr-2 rounded-sm"
      ></Image>
      <p className="text-sm text-zinc-500">
        ©Company Name - All rights reserved
      </p>
    </footer>
  );
}

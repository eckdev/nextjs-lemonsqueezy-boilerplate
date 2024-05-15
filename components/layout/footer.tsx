import { siteConfig } from "config/site";
import { Logo } from "../logo";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-8 border-t-[0.5px] py-12">
      <Logo />
      <p className="text-sm text-zinc-500">
        ©{siteConfig.name} - All rights reserved
      </p>
    </footer>
  );
}

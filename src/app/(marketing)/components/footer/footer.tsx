import Link from "next/link";

import { navItems, socialItems } from "../../constants";
import { ContactForm } from "./contact-form";
import {
  Code2Icon,
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full h-max pt-16 pb-11">
      <div className="flex justify-between w-full px-14">
        <ContactForm />
        <div className="flex items-center gap-x-7">
          <div>
            <p className="mb-3 cursor-context-menu font-bold">사이트</p>
            <ul className="flex flex-col gap-y-1">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="relative group">
                    <span className="relative z-10">{label}</span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 cursor-context-menu font-bold">소셜</p>
            <ul className="flex flex-col gap-y-1">
              {socialItems.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="relative group">
                    <span className="relative z-10">{label}</span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-black-lite opacity-20 my-11" />
      <div className="flex justify-between w-full px-14">
        <div className="flex gap-x-3 items-center">
          <span className="font-bold text-base">in</span>
          <Link href="https://github.com/hopago/Hopago_Wealth_Manager">
            <Code2Icon className="size-9" />
          </Link>
          <span className="text-gray-500 text-sm font-light">
            © 2024 Hopago
          </span>
        </div>
        <div className="flex gap-x-3 items-center">
          <InstagramIcon className="size-7" />
          <YoutubeIcon className="size-7" />
          <Link href="https://github.com/hopago">
            <GithubIcon className="size-7" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

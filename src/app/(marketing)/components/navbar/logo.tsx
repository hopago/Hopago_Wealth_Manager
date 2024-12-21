import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="flex items-center flex-1 gap-x-5" href="/">
      <Image
        src="/favicon/favicon-32x32.png"
        width={36}
        height={36}
        alt="Hopago Wealth Master"
        className="object-cover"
      />
      <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl">
        Hopago WM
      </h1>
    </Link>
  );
};

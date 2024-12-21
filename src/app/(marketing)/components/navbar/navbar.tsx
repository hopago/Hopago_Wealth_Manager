import { Links } from "./links";
import { Logo } from "./logo";
import { UserButton } from "../user-button";

export const Navbar = () => {
  return (
    <nav className="fixed top-[4rem] z-30 w-full flex items-center justify-between p-14">
      <Logo />
      {/* Only Desktop */}
      <Links />
      <UserButton />
      {/* Only Mobile */}
    </nav>
  );
};

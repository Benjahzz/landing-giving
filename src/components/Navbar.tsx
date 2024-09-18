import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="h-24 bg-transparent relative z-10">
      <nav className="flex justify-between items-center h-full px-10">
        <h1 className="text-2xl font-bold flex items-center gap-4 text-[#333333]">
          <img
            src="/src/assets/images/Logo.svg"
            alt="logo"
            className="h-10"
          />
          Givingli
        </h1>
        <ul className="flex items-center space-x-10">
          <li>
            <a
              href="#"
              className="text-lg font-semibold text-zinc-700"
            >
              About us
            </a>
          </li>
          <Button size={"xl"} className="rounded-full px-6 py-5">
            Start gifting
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

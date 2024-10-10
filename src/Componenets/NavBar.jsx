import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="relative z-10 flex items-center justify-between w-full p-8 mx-auto text-black">
      <Logo />
      <svg
        className="w-8 h-8"
        dataSlot="icon"
        fill="none"
        strokeWidth={1.0}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default NavBar;

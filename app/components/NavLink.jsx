// "user client";
import Link from "next/link";

const NavLink = ({ href, title, isActive = false }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 transition-colors ${
        isActive
          ? "text-white border-b-2 border-pink-500"
          : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;

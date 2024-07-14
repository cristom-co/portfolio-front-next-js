"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-4 pb-5">
        <Link
          className={`link ${pathname === "/" ? "text-green-500" : ""}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "text-green-500" : ""}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`link ${pathname === "/service" ? "text-green-500" : ""}`}
          href="/service"
        >
          Service
        </Link>
        <Link
          className={`link ${pathname === "/contact" ? "text-green-500" : ""}`}
          href="/contact"
        >
          Contact
        </Link>
    </div>
  );
};

export default Navbar;

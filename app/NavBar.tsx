'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname()

  const links = [
    {
      label: "Dashbaord", href: "/"
    },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 px-5 items-center">
      <Link href="/" className="text-2xl">
        <TbEaseInOutControlPoints />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className={
              classnames({
                'text-zinc-900 font-bold': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
              })
            }
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

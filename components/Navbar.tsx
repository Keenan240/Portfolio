import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname(); // current route

  const navItems = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "about", href: "/about" },
    { name: "resume", href: "https://docs.google.com/document/d/10qlqZVFDV_D6MUNa9RuC4EwqFTjKMolasIogbjmZ1xc/edit?usp=sharing" },
  ];

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="relative flex space-x-12 bg-white shadow-lg rounded-full px-12 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} passHref>
              <button
                className={`relative z-10 capitalize transition-colors ${
                  isActive
                    ? "font-semibold"
                    : "text-black opacity-70 hover:opacity-100"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute -inset-x-6 -inset-y-2 -z-10 rounded-full bg-neutral-100"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

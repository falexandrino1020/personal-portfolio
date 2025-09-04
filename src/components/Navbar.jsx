import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme logic
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const closeMenuAndUnlock = () => {
    setIsMenuOpen(false);
  };

  // Mobile overlay content (rendered via portal)
  const MobileOverlay = (
    <div className="md:hidden fixed inset-0 z-[1100] bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <div className="flex h-14 items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-foreground">
            Felipe Alexandrino
          </a>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Center everything vertically + horizontally */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-5 text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/90 hover:text-primary transition-colors duration-300"
              onClick={closeMenuAndUnlock}
            >
              {item.name}
            </a>
          ))}

          {/* Centered theme toggle button */}
          <button
            onClick={toggleTheme}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm text-foreground/90 hover:bg-border/30 transition-colors"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span>Theme</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] transition-shadow duration-300",
        isScrolled ? "shadow-lg shadow-black/5 bg-background/80 backdrop-blur" : ""
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center">
          {/* Left: Brand */}
          <a href="#hero" className="font-semibold tracking-tight text-foreground">
            Felipe Alexandrino
          </a>

          {/* Right group (md+): nav + theme toggle aligned right */}
          <div className="ml-auto hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* Theme toggle: right-most (md+) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300",
                "hover:bg-border/40"
              )}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile hamburger (no theme icon in top bar) */}
          <button
            className="ml-auto md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu via portal (escapes navbar stacking context) */}
      {isMenuOpen && createPortal(MobileOverlay, document.body)}
    </nav>
  );
};

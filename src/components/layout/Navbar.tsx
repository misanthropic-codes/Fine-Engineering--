import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/hooks/useTheme";
const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const {
    theme,
    setTheme
  } = useTheme();
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "bg-[#001a36]/95 backdrop-blur-sm py-2 shadow-md" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/7be31390-38b2-4d6c-836b-7e0975b75f8d.png" alt="Fine Engineering" className="h-10 mr-2 object-cover" />
            <h1 className="text-2xl font-bold text-white">
              <span className="text-[#d0bc8f]">Fine</span> Engineering
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`font-medium transition-colors hover:text-[#d0bc8f] ${location.pathname === link.path ? "text-[#d0bc8f] border-b-2 border-[#d0bc8f] pb-1" : "text-white"}`}>
                {link.name}
              </Link>)}
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme" className="border-white text-white hover:bg-white hover:text-[#001a36]">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden space-x-4">
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme" className="border-white text-white hover:bg-white hover:text-[#001a36]">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-[#001a36]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#001a36] text-white">
                <div className="flex items-center mb-10">
                  <img src="/lovable-uploads/7be31390-38b2-4d6c-836b-7e0975b75f8d.png" alt="Fine Engineering" className="h-8 mr-2" />
                  <span className="text-xl font-bold">
                    <span className="text-[#d0bc8f]">Fine</span> Engineering
                  </span>
                </div>
                <nav className="flex flex-col gap-8">
                  {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-lg font-medium transition-colors hover:text-[#d0bc8f] ${location.pathname === link.path ? "text-[#d0bc8f]" : "text-white"}`}>
                      {link.name}
                    </Link>)}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;
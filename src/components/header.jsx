import { useState } from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { TbSunMoon } from "react-icons/tb";
import { Link } from "react-router-dom";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Proyecto",
    "TechnoMasters",
    "Conctacto",
  ];

  const [darkMode, setDarkMode] = useState(false);

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className={darkMode ? 'dark bg-blue-950 text-white' : 'bg-blue-700 text-white'}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>

          <p className="font-bold text-inherit">BusTrack</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#introduction">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#solution" aria-current="page">
            Proyecto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#team">
            TechnoMasters
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-3">
          <Button to="login" as={Link} className="bg-lime-600 text-white font-bold" radius="sm" href="#" variant="flat" >
            Login
          </Button>
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>
            <TbSunMoon />
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className={darkMode ? 'dark bg-blue-950 text-white' : 'bg-blue-700 text-white'}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;

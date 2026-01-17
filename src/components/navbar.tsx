import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "LeetCode",
    icon: CodeBracketIcon,
    href: "https://leetcode.com/u/Basicallyanjali/",
  },
  {
    name: "CodeChef",
    icon: CommandLineIcon,
    href: "https://www.codechef.com/users/anja0911",
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-gray-300 hover:text-red-400"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50 bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="white" className="text-lg font-bold">
          Anjali Kumari
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5 text-red-400" />
              <span className="text-gray-300">{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://www.linkedin.com/in/anjali-kumari-91a504247" target="_blank" rel="noreferrer">
            <Button variant="text" className="text-gray-300 hover:text-red-400">
              <i className="fa-brands fa-linkedin text-xl mr-2" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/Anjal10911" target="_blank" rel="noreferrer">
            <Button className="bg-red-600 hover:bg-red-700">
              <i className="fa-brands fa-github text-xl mr-2" />
              GitHub
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-700 px-2 pt-4 bg-gray-900">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">{name}</span>
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="https://www.linkedin.com/in/anjali-kumari-91a504247" target="_blank" rel="noreferrer">
              <Button variant="text" className="text-gray-300">LinkedIn</Button>
            </a>
            <a href="https://github.com/Anjal10911" target="_blank" rel="noreferrer">
              <Button className="bg-red-600">GitHub</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

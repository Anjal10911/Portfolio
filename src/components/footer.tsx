import { Typography, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <Typography className="font-bold text-red-500 text-xl text-center">
            &quot;Security is not a feature. It&apos;s the foundation.&quot;
          </Typography>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-700 py-6 md:justify-between">
          &copy; {CURRENT_YEAR} Anjali Kumari. Thoughtfully built.
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/anjali-kumari-91a504247"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton variant="text" className="text-red-400 hover:text-red-300">
                <i className="fa-brands fa-linkedin text-2xl" />
              </IconButton>
            </a>
            <a href="https://github.com/Anjal10911" target="_blank" rel="noreferrer">
              <IconButton variant="text" className="text-red-400 hover:text-red-300">
                <i className="fa-brands fa-github text-2xl" />
              </IconButton>
            </a>
            <a href="https://leetcode.com/u/Basicallyanjali/" target="_blank" rel="noreferrer">
              <IconButton variant="text" className="text-red-400 hover:text-red-300">
                <i className="fa-solid fa-code text-2xl" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

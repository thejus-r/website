import { motion } from "framer-motion";

type Link = {
  site: string;
  url: string;
};

const links: Link[] = [
  {
    site: "LinkedIn",
    url: "https://www.linkedin.com/in/thejus-r/",
  },
  {
    site: "Github",
    url: "https://github.com/thejus-r",
  },
  {
    site: "Medium",
    url: "https://thejusr.medium.com/",
  },
  {
    site: "Behance",
    url: "https://www.behance.net/thejus-r",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="w-full text-xs text-stone-600"
    >
      <div className="w-full p-8 space-y-4 sm:p-12 flex flex-col sm:flex-row justify-between items-center">
        <div className="hidden sm:block">
          <p className="font-bold">EMAIL</p>
          <a
            className="text-lg underline text-stone-900"
            href="mailto:thejusr1999@icloud.com"
          >
            thejusr1999@icloud.com
          </a>
        </div>
        <ul className="flex sm:flex-row space-x-6 uppercase font-semibold">
          {links.map((link: Link, index: number) => {
            return (
              <li key={index}>
                <a rel="noreferrer" target="_blank" href={link.url}>
                  {link.site}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-center py-3"> © 2023 Thejus Rajendran.</p>
    </motion.footer>
  );
};

export default Footer;

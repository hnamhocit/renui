"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Button } from "renui";

import Actions from "./Actions";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 inset-x-0 bg-white transition dark:bg-gray-950 z-20 h-16 px-4 flex items-center justify-between shadow-md">
      <motion.div
        initial={{ opacity: 0, translateY: 16 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex items-center gap-3"
      >
        <Link href={"/"}>
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>

        <div className="text-xl dark:text-white transition font-bold">
          RenUI
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: 16 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex items-center gap-3"
      >
        <Button onClick={toggleTheme} isIconOnly isRounded>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        <Link target="_blank" href="https://github.com/hnamhocit">
          <Button isIconOnly isRounded>
            <FaGithub size={20} />
          </Button>
        </Link>

        <Link href="https://discord.gg/WXK7Q6Ub" target="_blank">
          <Button isIconOnly isRounded>
            <FaDiscord size={20} />
          </Button>
        </Link>

        <Actions />
      </motion.div>
    </header>
  );
};

export default Header;

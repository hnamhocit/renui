"use client";

import { motion } from "motion/react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { Button, Image } from "renui";

import Hero from "@/components/Hero";

const customers = [
  "/amazon-dark.svg",
  "/nasa.svg",
  "/netflix.svg",
  "/shutterstock-dark.svg",
  "/spotify-dark.svg",
  "/unity-dark.svg",
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="p-4 space-y-12 bg-gray-900 text-white">
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, translateY: 16 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            className="text-3xl font-bold text-center text-blue-600"
          >
            Why RenUI?
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-c md:grid-cols-3 gap-5">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="p-4 space-y-2 shadow-md rounded-md bg-gray-950 hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-3 font-semibold text-indigo-600">
                <AiFillThunderbolt size={20} />
                <div className="text-xl">Fast</div>
              </div>

              <div className="text-sm">Unpacked Size 463 kB</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="p-4 space-y-2 shadow-md rounded-md bg-gray-950 hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-3 font-semibold text-indigo-600">
                <IoShieldCheckmark size={20} />
                <div className="text-xl">Reliable</div>
              </div>

              <div className="text-sm">
                Test & debug & update, release new components often
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="p-4 space-y-2 shadow-md rounded-md bg-gray-950 hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-3 text-indigo-600 font-semibold">
                <FaBookOpenReader size={20} />
                <div className="text-xl">Easy to use</div>
              </div>

              <div className="text-sm">
                Full documents with storybook, code examples.
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, translateY: 16 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            className="flex items-center justify-evenly gap-5"
          >
            {customers.map((customer) => (
              <Image
                src={customer}
                alt={customer}
                key={customer}
                className="max-h-16 !object-contain"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 16 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            className="text-center"
          >
            The world&apos;s best product teams trust RenUI to deliver an
            unrivaled experience for both developers and users.{" "}
            <span className="text-red-600 font-semibold">Just for fun :))</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 16 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          className="flex items-center justify-center"
        >
          <div className="space-y-4 max-w-md text-center">
            <div className="font-medium text-blue-600">Start now</div>
            <div className="text-2xl font-bold">
              Ship your next project{" "}
              <span className="font-extrabold text-blue-600">faster</span>
            </div>

            <div>
              Find out why RenUI&apos;s tools are trusted by thousands of
              open-source developers and teams around the world.
            </div>

            <div className="flex justify-center">
              <Button color="primary" isRounded>
                Discover the core library
                <FaAngleRight />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { Sidebar,SidebarBody,SidebarLink } from "@/components/ui/sidebar";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import ExchnagePage from "./exchangepage";
import { HomeIcon } from "lucide-react";
import { SiMarketo } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

export function SidebarExchange() {
  const links = [
    {
      label: "Dashboard",
      href: "/dash",
      icon: (
        <HomeIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/>
      ),
    },
    {
      label: "Exchange",
      href: "/dash/exchange",
      icon: (
        <SiMarketo className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/>
      ),
    },
    {
      label: "Transaction History",
      href: "/dash/History",
      icon: (
        <FaHistory className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/>
      ),
    },
    {
      label: "Exit",
      href: "/",
      icon: (
        <IoMdExit className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <UserButton/>
          </div>
        </SidebarBody>
      </Sidebar>
      <ExchnagePage/>
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white">
        Anion Exchnage
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

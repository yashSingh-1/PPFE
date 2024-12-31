"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarLinks } from "@/lib/SidebarLinks";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, isSetOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="w-full p-3 bg-gradient-to-r from-slate-950 via-black to-slate-800 flex justify-between shadow-2xl z-10">
      <div className="text-2xl font-mono text-blue-600 font-extrabold shadow-lg shadow-blue-900 p-2 ">
        <Link href={"/home"}>
        PostPulse
        </Link>
      </div>
      <div>
        <Sheet open={open} onOpenChange={isSetOpen}>
          <SheetTrigger asChild className="flex my-auto">
            {/* <Image src={"/Nav.svg"} alt="Navigation" width={24} height={24}/> */}
            <Button className="bg-slate-800">Open</Button>
          </SheetTrigger>
          <SheetClose asChild>
            <SheetContent className="font-mono bg-gradient-to-r from-slate-950 via-black to-slate-900">
              <div>
                <SheetHeader className="text-white py-4">
                  <SheetTitle className="font-mono text-2xl text-white">
                    PostPulse
                  </SheetTitle>
                  Analyze using AI.
                </SheetHeader>
                <div >
                  {SidebarLinks.map((links) => {
                    const isActive =
                      path === links.route ||
                      path.startsWith(`/${links.route}/`);
                    return (
                      <Link href={links.route} key={links.route} >
                        <div
                          className={cn("mt-5 text-white text-md w-full p-2  rounded-lg", isActive ? 'bg-blue-600' : 'border-t border-b')}
                          onClick={() => isSetOpen(false)}
                        >
                          {links.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </SheetClose>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

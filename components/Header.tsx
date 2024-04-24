"use client";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);

  const controlNavbar = () => {
    if (window.scrollY > 800) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    function outerClickDetector(e: MouseEvent) {
      if (outerRef.current && !outerRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener("click", outerClickDetector);
    }
    return () => {
      document.removeEventListener("click", outerClickDetector);
    };
  }, [showMenu]);

  return (
    <header
      className={`
        ${"flex gap-6 text-white justify-between h-[80px] items-center p-[12px] fixed top-0 left-0 w-full cursor-pointer"} ${
        !show ? "myHidden" : "myVisible"
      } ${headerBg && "bg-black"}`}
    >
      <section className="text-2xl tracking-[8px] ">SpaceX</section>
      <nav className="flex gap-4 text-sm items-center max-xl:hidden">
        <a>FALCON HEAVY</a>
        <a>FALCON 9</a>
        <a>DRAGON</a>
        <a>STARSHIP</a>
        <a>HUMAN SPACEFLIGHT</a>
        <a>RIDESHARE</a>
        <a>RIDESHARE</a>
        <a>STARSHIELD</a>
        <a>STARLINK</a>
      </nav>
      <section className="flex gap-4 text-sm items-center">
        <div className="max-xl:hidden">SHOP</div>
        <AlignJustify
          onClick={(e) => {
            setShowMenu(true);
          }}
        />
      </section>
      {showMenu && (
        <div
          className="w-[400px] h-[100vh] bg-black absolute top-0 right-0"
          ref={outerRef}
        >
          <X
            className="absolute top-8 right-4"
            onClick={() => setShowMenu(false)}
          />
          <section className="flex flex-col mt-20 p-[12px] gap-6 text-[12px] items-end">
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>FALCON HEAVY</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>FALCON 9</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>DRAGON</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>STARSHIP</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>HUMAN SPACEFLIGHT</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>RIDESHARE</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>STARSHIELD</a>
            </div>
            <div className="border-b-[1px] border-color-[rgb(37,37,37)] w-full h-[30px]  flex justify-end text-gray-500">
              <a>STARLINK</a>
            </div>
          </section>
        </div>
      )}
    </header>
  );
}

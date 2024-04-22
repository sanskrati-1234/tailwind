"use client";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);

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
    <header className="flex gap-6 bg-black text-white justify-between h-[80px] items-center p-[12px]">
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

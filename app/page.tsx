"use client";
import Header from "@/components/Header";
import { AlignJustify, X } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Header />
    </>
  );
}

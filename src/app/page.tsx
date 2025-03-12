import PageHome from "@/components/page/PageHome";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Caption Maker - Tokisaki Gallery",
  description: "caption maker for tokisaki gallery",
};

export default function Home() {
  return <PageHome />;
}

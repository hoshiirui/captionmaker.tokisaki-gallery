import PageDatabase from "@/components/page/PageDatabase";
import PageHome from "@/components/page/PageHome";
import PageNotification from "@/components/page/PageNotification";
import PageNotifv2 from "@/components/page/PageNotifv2";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notification Test - Tokisaki Gallery",
  description: "caption maker for tokisaki gallery",
};

export default function Home() {
  return <PageNotifv2 />;
}

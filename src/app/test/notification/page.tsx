"use client";

import Header from "@/components/templates/Header";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    // Request notification permission when the component mounts
    function requestNotificationPermission() {
      if (!("Notification" in window)) {
        console.log("This browser does not support notifications.");
        return;
      }

      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
        if (permission === "granted") {
          console.log("Permission granted, you can now show notifications.");
        } else if (permission === "denied") {
          console.log(
            "Permission denied, the user will not receive notifications."
          );
        } else if (permission === "default") {
          console.log(
            "Permission dismissed, you might want to ask again later."
          );
        }
      });
    }

    requestNotificationPermission();
  }, []);

  const showBasicNotification = () => {
    console.log("jalan");
    console.log(Notification.permission);
    if (Notification.permission === "granted") {
      new Notification("Simple Notification", {
        body: "This is a basic notification example from Next.js!",
      });
    } else {
      alert("Please grant notification permissions to see this notification.");
    }
  };

  const showAdvancedNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Advanced Notification", {
        body: "Check out these cool features!",
        icon: "/vercel.svg", // Ensure this path to your icon is correct (in the public folder)
        badge: "/vercel.svg", // Optional badge icon
        // vibrate: [200, 100, 200, 100, 400],
        // sound: "sdfs", // You can specify a sound file URL here
        data: { url: "/dashboard" }, // Custom data
        tag: "advanced-notification", // Tag to prevent duplicates
        // actions: [
        //   { action: "view", title: "View Dashboard" },
        //   { action: "dismiss", title: "Dismiss" },
        // ],
      });
    } else {
      alert(
        "Please grant notification permissions to see this advanced notification."
      );
    }
  };

  useEffect(() => {
    // Event listener for notification clicks (only runs in the browser)
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "notification-click") {
          console.log(
            "Notification clicked from service worker:",
            event.data.action
          );
          if (event.data.action === "view" && event.data.url) {
            window.open(event.data.url, "_blank");
          }
          // You can handle other actions here
        }
      });
    }
  }, []);

  return (
    <div className="mx-auto bg-white p-6 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
        <p className="lg:max-w-3xl text-center mx-auto font-bold text-black text-4xl mt-10">
          Tokisaki Gallery Caption Maker
        </p>
      </div>
      <button
        className="mx-auto text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white cursor-pointer"
        onClick={showBasicNotification}
      >
        Show Basic Notification
      </button>
      <button onClick={showAdvancedNotification}>
        Show Advanced Notification
      </button>
      <button type="button">test</button>
    </div>
  );
};

export default page;

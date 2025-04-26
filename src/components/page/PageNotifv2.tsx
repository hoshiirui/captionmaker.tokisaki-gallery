"use client";

import React, { useEffect } from "react";

const PageNotifv2 = () => {
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

  const showNotif = () => {
    if (Notification.permission === "granted") {
      new Notification("example notif", {
        body: "testsdfs",
      });
    }
  };

  return (
    <div>
      <button onClick={showNotif}>test notif</button>
    </div>
  );
};

export default PageNotifv2;

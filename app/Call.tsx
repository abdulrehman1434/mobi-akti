import React from "react";
import { CallScreen } from "../components/CallScreen";

const index = () => {
  return (
    <CallScreen
      name="Scott R. Shoemake"
      duration="04:50 Minutes"
      onBackPress={() => console.log("Back pressed")}
      onMutePress={() => console.log("Mute pressed")}
      onEndPress={() => console.log("End call pressed")}
      onMessagePress={() => console.log("Message pressed")}
    />
  );
};

export default index;

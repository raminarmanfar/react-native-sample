import React, { Component } from "react";
import { View, Image } from "react-native";

const NetImagesExample = () => (
  <Image
    source={{
      uri:
        "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"
    }}
    style={{ width: 100, height: 100 }}
  />
);
export default NetImagesExample;

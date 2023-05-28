import React from "react";
import { View, Text, Image } from "react-native";

const header = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 35,
        paddingBottom:20
      }}
    >
      <Image
        source={{
          uri: "https://nursultan12345.github.io/tolem/logo-green.png",
        }}
        style={{ width: 180, height: 40 }}
      ></Image>
    </View>
  );
};

export default header;

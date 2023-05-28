import React from "react";
import { View,Text,Image, ScrollView } from "react-native";
import Header from "./src/components/header";
import Main from "./src/components/main";
import Cardtwo from "./src/components/cardtwo";
import Cardthree from "./src/components/cardthree";



export default function App() {
  return (
    <ScrollView>
      <Header/>
      <Main/>
      <Cardtwo/>
      <Cardthree/>
    </ScrollView>
  );
}


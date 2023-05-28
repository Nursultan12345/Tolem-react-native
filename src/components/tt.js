import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Linking,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import news from "../../assets/news.png";
import contacts from "../../assets/contacts.png";
import info from "../../assets/info.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";

const header = () => {
  const [currentTab, setcurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const link = "https://www.facebook.com/tolemcardkz";
  const openLink = () => Linking.openURL(link);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(2)).current;

  return (
    /* <View style={{ height: 100 }}>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Image
            source={{
              uri: "https://nursultan12345.github.io/tolem/logo-green.png",
            }}
            style={{ width: 130, height: 40 }}
          />
        </TouchableHighlight>
      </View> */

    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-end", padding: 15 }}>
        <View style={{ flexGrow: 1, marginTop: 20 }}>
          {}
          {TabButton(currentTab, setcurrentTab, "Новости", news,openLink)}
          {TabButton(currentTab, setcurrentTab, "Контакты", contacts)}
        </View>

        <View style={{}}>
          {TabButton(currentTab, setcurrentTab, "Facebook", facebook)}
          {TabButton(currentTab, setcurrentTab, "Instagram", instagram)}
          {TabButton(currentTab, setcurrentTab, "Telegram", telegram)}
        </View>
      </View>
      {}
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          paddingHorizontal: 15,
          borderRadius: showMenu ? 5 : 0,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://nursultan12345.github.io/tolem/logo-green.png",
            }}
            style={{ width: 130, height: 40 }}
          ></Image>
          <Animated.View>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 1,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : -200,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
                Animated.timing(closeButtonOffset, {
                  toValue: showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}
            >
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "black",
                }}
              ></Image>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
const TabButton = (currentTab, setcurrentTab, title, image,openLink) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // Linking.openURL("https://www.google.com");
        setcurrentTab(title);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "#fff" : "transparent",
          borderRadius: 8,
          paddingLeft: 13,
          paddingRight: 35,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 30,
            height: 30,
            tintColor: currentTab == title ? "#000" : "white",
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#000" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    
    marginTop: 20,
    marginBottom:50,
    backgroundColor: "#7bc248",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default header;

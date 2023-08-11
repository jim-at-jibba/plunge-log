import React from "react";
import { Platform, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: Platform.OS === "ios" && {
          backgroundColor: "transparent"
        },
        headerShown: false
      }}
      tabBar={(props) =>
        Platform.OS === "ios" ? (
          <BlurView
            style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            intensity={95}
          >
            <BottomTabBar {...props} />
          </BlurView>
        ) : (
          <BottomTabBar {...props} />
        )
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent"
              }}
            >
              <TabBarIcon
                name="home"
                color={color}
                size={24}
              />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Home
              </Text>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="plunges"
        options={{
          title: "",
          headerShown: false,
          href: {
            pathname: "/plunges"
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent"
              }}
            >
              <TabBarIcon
                name="notebook"
                color={color}
                size={24}
              />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Plunges
              </Text>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "",
          headerShown: false,
          href: {
            pathname: "/account"
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent"
              }}
            >
              <TabBarIcon
                name="user"
                color={color}
                size={24}
              />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Account
              </Text>
            </View>
          )
        }}
      />
    </Tabs>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof SimpleLineIcons>["name"];
  color: string;
  size?: number;
}) {
  return (
    <SimpleLineIcons
      size={props.size || 26}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

import {
  HomeIcon,
  MineIcon,
  ProfileIcon,
  RewardIcon,
  StakeIcon,
} from "@/constants/TabsIcons";
import {useTheme} from "@/theme";
import {Tabs} from "expo-router";
import React from "react";

const TabsLayout = () => {
  const {colors, fontSizes} = useTheme();
  return (
    <Tabs
      screenOptions={{
        // tabBarButton: (props) => <Pressable {...props} android_ripple={null} />,
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderColor: colors.background,
          borderTopWidth: 0,
          shadowOpacity: 0,
          shadowColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: fontSizes.xxs,
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => (
            <HomeIcon
              color={focused ? colors.text : colors.textTertiary}
              brandColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='stake'
        options={{
          title: "Stake",
          tabBarIcon: ({color, focused}) => (
            <StakeIcon
              color={focused ? colors.text : colors.textTertiary}
              brandColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='rewards'
        options={{
          title: "Rewards",
          tabBarIcon: ({color, focused}) => (
            <RewardIcon
              color={focused ? colors.text : colors.textTertiary}
              brandColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='mine'
        options={{
          title: "Mine",
          tabBarIcon: ({color, focused}) => (
            <MineIcon
              color={focused ? colors.text : colors.textTertiary}
              brandColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({color, focused}) => (
            <ProfileIcon
              color={focused ? colors.text : colors.textTertiary}
              brandColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

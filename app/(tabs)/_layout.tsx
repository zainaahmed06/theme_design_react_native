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
  const {colors} = useTheme();
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
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({color}) => (
            <HomeIcon color={colors.textTertiary} brandColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='stake'
        options={{
          title: "Stake",
          tabBarIcon: ({color}) => (
            <StakeIcon color={colors.textTertiary} brandColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='rewards'
        options={{
          title: "Rewards",
          tabBarIcon: ({color}) => (
            <RewardIcon color={colors.textTertiary} brandColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='mine'
        options={{
          title: "Mine",
          tabBarIcon: ({color}) => (
            <MineIcon color={colors.textTertiary} brandColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({color}) => (
            <ProfileIcon color={colors.textTertiary} brandColor={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

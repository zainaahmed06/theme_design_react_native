import {
  HomeIcon,
  MineIcon,
  ProfileIcon,
  RewardIcon,
  StakeIcon,
} from "@/constants/TabsIcons";
import {useTheme} from "@/theme";
import React from "react";
import {Button, Text, View} from "react-native";

const Home = () => {
  const {colors, toggleTheme, isDark} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{color: colors.text}}>Mine</Text>
      <Button
        onPress={toggleTheme}
        title={isDark ? "Light Mode" : "Dark Mode"}
      />
      <HomeIcon color={colors.textTertiary} brandColor={colors.primary} />
      <StakeIcon color={colors.textTertiary} brandColor={colors.primary} />
      <RewardIcon color={colors.textTertiary} brandColor={colors.primary} />
      <MineIcon color={colors.textTertiary} brandColor={colors.primary} />
      <ProfileIcon color={colors.textTertiary} brandColor={colors.primary} />
    </View>
  );
};

export default Home;

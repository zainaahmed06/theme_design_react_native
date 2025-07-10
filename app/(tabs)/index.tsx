import HomeHeader from "@/components/design/HomeHeader";
import {useTheme} from "@/theme";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
  const {colors, spacing} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.sm,
      }}>
      <HomeHeader />
    </SafeAreaView>
  );
};

export default Home;

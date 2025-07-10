import AssetsList from "@/components/design/AssetsList";
import BalanceCard from "@/components/design/BalanceCard";
import HomeHeader from "@/components/design/HomeHeader";
import QuickActions from "@/components/design/QuickActions";
import {useTheme} from "@/theme";
import React from "react";
import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
  const {colors, spacing} = useTheme();
  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
        // marginBottom: spacing.lg,
      }}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard balance={2093} />
        <QuickActions />
        <AssetsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

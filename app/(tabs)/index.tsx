import AssetsList from "@/components/design/AssetsList";
import BalanceCard from "@/components/design/BalanceCard";
import HomeHeader from "@/components/design/HomeHeader";
import QuickActions from "@/components/design/QuickActions";
import {useTheme} from "@/theme";
import React, {useCallback, useState} from "react";
import {RefreshControl, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
  const {colors, spacing} = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    try {
      // Simulate API calls or data fetching
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically:
      // - Refresh balance data
      // - Update crypto prices
      // - Reload assets list
      // - Sync wallet information

      console.log("Data refreshed successfully!");
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
      }}>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]} // Android
            tintColor={colors.primary} // iOS
            title='Pull to refresh' // iOS
            titleColor={colors.textSecondary} // iOS
            progressBackgroundColor={colors.surfaceSecondary} // Android
          />
        }>
        <BalanceCard balance={2093} />
        <QuickActions />
        <AssetsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

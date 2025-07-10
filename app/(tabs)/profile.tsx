import Header from "@/components/design/Header";
import ProfileCard from "@/components/design/ProfileCard";
import ProfileMenuList from "@/components/design/ProfileMenuList";
import {BackIcon, SettingIcon} from "@/constants/ProfileScreenIcons";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useCallback, useState} from "react";
import {RefreshControl, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {colors, spacing} = useTheme();

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

  const menuSections = [
    {
      title: "Account",
      items: [
        {
          id: "identity",
          title: "Identity Verification",
          icon: <Ionicons name='card-outline' size={24} color={colors.text} />,
          onPress: () => router.push("/signin"),
        },
        {
          id: "2fa",
          title: "Two-Factor Authentication",
          icon: (
            <Ionicons
              name='shield-checkmark-outline'
              size={24}
              color={colors.text}
            />
          ),
          onPress: () => router.push("/signin"),
        },
        {
          id: "history",
          title: "Transaction History",
          icon: <Ionicons name='time-outline' size={24} color={colors.text} />,
          onPress: () => router.push("/signin"),
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          id: "notifications",
          title: "Notifications",
          icon: (
            <Ionicons
              name='notifications-outline'
              size={24}
              color={colors.text}
            />
          ),
          onPress: () => router.push("/signin"),
        },
        {
          id: "security",
          title: "Security",
          icon: (
            <Ionicons
              name='lock-closed-outline'
              size={24}
              color={colors.text}
            />
          ),
          onPress: () => console.log("Security Pressed"),
        },
        {
          id: "logout",
          title: "Logout",
          icon: (
            <Ionicons name='log-out-outline' size={24} color={colors.danger} />
          ),
          onPress: () => router.push("/signin"),
          showChevron: false, // Optional: hide chevron for logout
        },
      ],
    },
  ];
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: spacing.md,
        backgroundColor: colors.background,
      }}>
      <Header
        title='Profile'
        leftIcon={<BackIcon color={colors.text} />}
        rightIcon={<SettingIcon color={colors.text} />}
        onLeftPress={() => console.log("Back pressed")}
        onRightPress={() => console.log("Menu pressed")}
      />
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
        <ProfileCard
          uid='37489202'
          name='Shafqat Ullah'
          emailVerified={true}
          kycVerified={false}
          onPress={() => console.log("Profile pressed")}
        />
        <ProfileMenuList sections={menuSections} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

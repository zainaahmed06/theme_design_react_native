import {MoreIcon, WithdrawDepositIcon} from "@/constants/HomeScreenIcons";
import {
  HistoryIcon,
  MineIcon,
  RewardIcon,
  StakeIcon,
} from "@/constants/TabsIcons";
import {useTheme} from "@/theme";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface QuickActionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const QuickActions = () => {
  const {colors, spacing, radius, fontSizes} = useTheme();

  const quickActions: QuickActionItem[] = [
    {
      id: "deposit",
      title: "Deposit",
      icon: (
        <WithdrawDepositIcon color={colors.text} brandColor={colors.primary} />
      ),
      onPress: () => console.log("Deposit pressed"),
    },
    {
      id: "withdraw",
      title: "Withdraw",
      icon: (
        <WithdrawDepositIcon
          rotation={180}
          color={colors.text}
          brandColor={colors.primary}
        />
      ),
      onPress: () => console.log("Withdraw pressed"),
    },
    {
      id: "stake",
      title: "Stake",
      icon: <StakeIcon color={colors.text} brandColor={colors.primary} />,
      onPress: () => console.log("Stake pressed"),
    },
    {
      id: "mine",
      title: "Mine",
      icon: <MineIcon color={colors.text} brandColor={colors.primary} />,
      onPress: () => console.log("Mine pressed"),
    },
    {
      id: "history",
      title: "History",
      icon: <HistoryIcon color={colors.text} brandColor={colors.primary} />,
      onPress: () => console.log("History pressed"),
    },
    {
      id: "rewards",
      title: "Rewards",
      icon: <RewardIcon color={colors.text} brandColor={colors.primary} />,
      onPress: () => console.log("Rewards pressed"),
    },
    {
      id: "more",
      title: "More",
      icon: <MoreIcon color={colors.text} brandColor={colors.primary} />,
      onPress: () => console.log("More pressed"),
    },
  ];

  const styles = StyleSheet.create({
    grid: {
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    actionItem: {
      width: "25%", // 4 items per row
      alignItems: "center",
      paddingVertical: spacing.md,
    },
    actionItemBottom: {
      width: "25%", // 3 items per row for bottom
      alignItems: "center",
      paddingVertical: spacing.md,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: radius.md,
      backgroundColor: colors.surfaceSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    actionText: {
      fontSize: fontSizes.xs,
      //   fontWeight: "400",
      color: colors.text,
      textAlign: "center",
    },
  });

  const topRowActions = quickActions.slice(0, 4);
  const bottomRowActions = quickActions.slice(4, 7);

  return (
    <View>
      {/* Top Row - 4 items */}
      <View style={styles.grid}>
        {topRowActions.map((action) => (
          <Pressable
            key={action.id}
            style={styles.actionItem}
            onPress={action.onPress}>
            <View style={styles.iconContainer}>{action.icon}</View>
            <Text style={styles.actionText}>{action.title}</Text>
          </Pressable>
        ))}
      </View>

      {/* Bottom Row - 3 items */}
      <View style={styles.grid}>
        {bottomRowActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionItemBottom}
            onPress={action.onPress}
            activeOpacity={0.7}>
            <View style={styles.iconContainer}>{action.icon}</View>
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

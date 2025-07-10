import {UpDownIcon} from "@/constants/HomeScreenIcons";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Pressable, Text, View} from "react-native";

const BalanceCard = ({balance = 29380, decimalBalance = 89}) => {
  const {colors, fontSizes, spacing} = useTheme();
  const [balanceVisible, setBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    if (balanceVisible) {
      setBalanceVisible(false);
    } else {
      setBalanceVisible(true);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: spacing.xl,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View style={{flexDirection: "column", gap: spacing.xs}}>
        <Text style={{color: colors.textSecondary, fontSize: fontSizes.md}}>
          Balance
        </Text>
        <View style={{flexDirection: "row", alignItems: "baseline"}}>
          {balanceVisible ? (
            <Text
              style={{
                color: colors.text,
                fontSize: fontSizes.xxxl,
                fontWeight: "bold",
              }}>
              $ {balance}
            </Text>
          ) : (
            <Text
              style={{
                color: colors.text,
                fontSize: fontSizes.xxxl,
                fontWeight: "bold",
              }}>
              $ -----
            </Text>
          )}
          {balanceVisible ? (
            <Text style={{color: colors.textTertiary, fontSize: fontSizes.lg}}>
              .{decimalBalance}
            </Text>
          ) : (
            <Text style={{color: colors.textTertiary, fontSize: fontSizes.lg}}>
              .--
            </Text>
          )}
        </View>
        <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
          <UpDownIcon color={colors.success} />
          <Text style={{color: colors.textSecondary, fontSize: fontSizes.md}}>
            25 %{" "}
          </Text>
        </View>
      </View>
      <View>
        <Pressable onPress={toggleBalanceVisibility}>
          <Ionicons
            name={balanceVisible ? "eye" : "eye-off"}
            size={24}
            color={colors.textTertiary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BalanceCard;

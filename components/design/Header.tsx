import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface HeaderProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  backgroundColor?: string;
  titleColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Profile",
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  showLeftIcon = true,
  showRightIcon = true,
  backgroundColor,
  titleColor,
}) => {
  const {colors, spacing, fontSizes} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: spacing.md,
      backgroundColor: backgroundColor || colors.background,
      height: 60,
    },
    leftSection: {
      width: 40,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    rightSection: {
      width: 40,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    iconContainer: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    titleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.md,
    },
    title: {
      fontSize: fontSizes.lg,
      fontWeight: "600",
      color: titleColor || colors.text,
      textAlign: "center",
    },
  });

  const defaultLeftIcon = (
    <Ionicons name='chevron-back' size={24} color={colors.text} />
  );

  const defaultRightIcon = (
    <Ionicons name='settings-outline' size={24} color={colors.text} />
  );

  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {showLeftIcon && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onLeftPress}
            activeOpacity={0.7}>
            {leftIcon || defaultLeftIcon}
          </TouchableOpacity>
        )}
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        {showRightIcon && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onRightPress}
            activeOpacity={0.7}>
            {rightIcon || defaultRightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

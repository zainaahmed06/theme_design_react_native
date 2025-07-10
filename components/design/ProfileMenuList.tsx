import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  showChevron?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface ProfileMenuListProps {
  sections: MenuSection[];
}

const ProfileMenuList: React.FC<ProfileMenuListProps> = ({sections}) => {
  const {colors, spacing, radius, fontSizes} = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginVertical: spacing.md,
    },
    sectionContainer: {
      marginBottom: spacing.xl,
    },
    sectionTitle: {
      fontSize: fontSizes.lg,
      fontWeight: "600",
      color: colors.text,
      marginBottom: spacing.md,
    },
    menuContainer: {
      backgroundColor: colors.surfaceSecondary,

      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: colors.border,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.divider,
    },
    lastMenuItem: {
      borderBottomWidth: 0,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: radius.md,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },
    menuTitle: {
      flex: 1,
      fontSize: fontSizes.sm,
      fontWeight: "500",
      color: colors.text,
    },
    chevron: {
      marginLeft: spacing.sm,
    },
  });

  const renderMenuItem = (item: MenuItem, index: number, isLast: boolean) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.menuItem, isLast && styles.lastMenuItem]}
      onPress={item.onPress}
      activeOpacity={0.7}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.menuTitle}>{item.title}</Text>
      {item.showChevron !== false && (
        <Ionicons
          name='chevron-forward'
          size={20}
          color={colors.textSecondary}
          style={styles.chevron}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {sections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.menuContainer}>
            {section.items.map((item, itemIndex) =>
              renderMenuItem(
                item,
                itemIndex,
                itemIndex === section.items.length - 1
              )
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProfileMenuList;

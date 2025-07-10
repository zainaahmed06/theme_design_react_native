import {EmailVerifiedIcon} from "@/constants/ProfileScreenIcons";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface ProfileCardProps {
  uid?: string;
  name?: string;
  emailVerified?: boolean;
  kycVerified?: boolean;
  onPress?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  uid = "37489202",
  name = "Shafqat Ullah",
  emailVerified = true,
  kycVerified = false,
  onPress,
}) => {
  const {colors, spacing, radius, fontSizes} = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.surfaceSecondary,
      borderRadius: radius.lg,
      padding: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: spacing.lg,
    },
    profileRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    avatarContainer: {
      width: 60,
      height: 60,
      borderRadius: radius.full,
      backgroundColor: "#6366F1",
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.md,
    },
    avatarIcon: {
      fontSize: fontSizes.xl,
      color: colors.text,
    },
    profileInfo: {
      flex: 1,
    },
    uidText: {
      fontSize: fontSizes.sm,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    nameText: {
      fontSize: fontSizes.lg,
      fontWeight: "600",
      color: colors.text,
      marginBottom: spacing.sm,
    },
    statusRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
    },
    statusItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
    },
    statusDot: {
      width: 8,
      height: 8,
      borderRadius: radius.full,
    },
    statusText: {
      fontSize: fontSizes.sm,
      color: colors.textSecondary,
    },
    chevronIcon: {
      marginLeft: spacing.sm,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.profileRow}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarIcon}>👤</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.uidText}>UID : {uid}</Text>
          <Text style={styles.nameText}>{name}</Text>

          <View style={styles.statusRow}>
            <View style={styles.statusItem}>
              <EmailVerifiedIcon
                size={16}
                color={emailVerified ? colors.success : colors.danger}
              />
              <Text style={styles.statusText}>Email</Text>
            </View>

            <View style={styles.statusItem}>
              <EmailVerifiedIcon
                size={16}
                color={kycVerified ? colors.success : colors.danger}
              />
              <Text style={styles.statusText}>KYC</Text>
            </View>
          </View>
        </View>

        <Ionicons
          name='chevron-forward'
          size={20}
          color={colors.textSecondary}
          style={styles.chevronIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;

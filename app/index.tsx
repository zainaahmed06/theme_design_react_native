import {useTheme} from "@/theme";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Index = () => {
  const {colors, isDark, toggleTheme, spacing, radius, fontSizes, shadows} =
    useTheme();

  // Dynamic styles based on current theme
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.surface,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      ...shadows.small,
    },
    headerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: fontSizes.xxl,
      fontWeight: "bold",
      color: colors.text,
    },
    subtitle: {
      fontSize: fontSizes.sm,
      color: colors.textSecondary,
      marginTop: spacing.xs,
    },
    themeButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.md,
      ...shadows.medium,
    },
    themeButtonText: {
      color: colors.textInverse,
      fontSize: fontSizes.sm,
      fontWeight: "600",
    },
    content: {
      flex: 1,
      padding: spacing.lg,
    },
    sectionTitle: {
      fontSize: fontSizes.lg,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: spacing.md,
      marginTop: spacing.lg,
    },
    // Typography showcase
    typographyContainer: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      ...shadows.card,
    },
    // Spacing showcase
    spacingContainer: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      ...shadows.card,
    },
    spacingBox: {
      backgroundColor: colors.primary,
      marginBottom: spacing.sm,
    },
    spacingLabel: {
      fontSize: fontSizes.xs,
      color: colors.textTertiary,
      marginBottom: spacing.xs,
    },
    // Color showcase
    colorContainer: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      ...shadows.card,
    },
    colorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    colorItem: {
      width: "30%",
      marginBottom: spacing.md,
      alignItems: "center",
    },
    colorBox: {
      width: spacing.xxl,
      height: spacing.xxl,
      marginBottom: spacing.xs,
    },
    colorLabel: {
      fontSize: fontSizes.xxs,
      color: colors.textTertiary,
      textAlign: "center",
    },
    // Radius showcase
    radiusContainer: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      ...shadows.card,
    },
    radiusGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    radiusItem: {
      width: "30%",
      marginBottom: spacing.md,
      alignItems: "center",
    },
    radiusBox: {
      width: spacing.xxl,
      height: spacing.xxl,
      backgroundColor: colors.secondary,
      marginBottom: spacing.xs,
    },
    // Crypto trading card example
    cryptoCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      ...shadows.card,
    },
    cryptoHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    cryptoName: {
      fontSize: fontSizes.lg,
      fontWeight: "bold",
      color: colors.text,
    },
    cryptoSymbol: {
      fontSize: fontSizes.sm,
      color: colors.textSecondary,
    },
    cryptoPrice: {
      fontSize: fontSizes.xl,
      fontWeight: "bold",
      color: colors.text,
    },
    cryptoChange: {
      fontSize: fontSizes.sm,
      fontWeight: "600",
    },
    cryptoStats: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: spacing.md,
      paddingTop: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.divider,
    },
    statItem: {
      alignItems: "center",
    },
    statLabel: {
      fontSize: fontSizes.xs,
      color: colors.textTertiary,
      marginBottom: spacing.xs,
    },
    statValue: {
      fontSize: fontSizes.sm,
      fontWeight: "600",
      color: colors.text,
    },
    // Action buttons
    actionButton: {
      backgroundColor: colors.secondary,
      borderRadius: radius.md,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      alignItems: "center",
      marginTop: spacing.md,
      ...shadows.medium,
    },
    actionButtonText: {
      color: colors.textInverse,
      fontSize: fontSizes.md,
      fontWeight: "bold",
    },
  });

  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$43,250.00",
      change: 2.34,
      volume: "$28.4B",
      marketCap: "$845.2B",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,680.50",
      change: -1.12,
      volume: "$15.2B",
      marketCap: "$322.1B",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.surface}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.title}>Crypto Theme Demo</Text>
            <Text style={styles.subtitle}>
              Showcasing {isDark ? "Dark" : "Light"} Theme
            </Text>
          </View>
          <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
            <Text style={styles.themeButtonText}>
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Typography Showcase */}
        <Text style={styles.sectionTitle}>Typography Scale</Text>
        <View style={styles.typographyContainer}>
          <Text
            style={{
              fontSize: fontSizes.xxxl,
              color: colors.text,
              fontWeight: "bold",
            }}>
            XXXL - {fontSizes.xxxl}px
          </Text>
          <Text
            style={{
              fontSize: fontSizes.xxl,
              color: colors.text,
              fontWeight: "bold",
            }}>
            XXL - {fontSizes.xxl}px
          </Text>
          <Text
            style={{
              fontSize: fontSizes.xl,
              color: colors.text,
              fontWeight: "600",
            }}>
            XL - {fontSizes.xl}px
          </Text>
          <Text style={{fontSize: fontSizes.lg, color: colors.text}}>
            LG - {fontSizes.lg}px
          </Text>
          <Text style={{fontSize: fontSizes.md, color: colors.textSecondary}}>
            MD - {fontSizes.md}px (Base)
          </Text>
          <Text style={{fontSize: fontSizes.sm, color: colors.textSecondary}}>
            SM - {fontSizes.sm}px
          </Text>
          <Text style={{fontSize: fontSizes.xs, color: colors.textTertiary}}>
            XS - {fontSizes.xs}px
          </Text>
          <Text style={{fontSize: fontSizes.xxs, color: colors.textTertiary}}>
            XXS - {fontSizes.xxs}px
          </Text>
        </View>

        {/* Spacing Showcase */}
        <Text style={styles.sectionTitle}>Spacing Scale</Text>
        <View style={styles.spacingContainer}>
          {Object.entries(spacing).map(([key, value]) => (
            <View key={key}>
              <Text style={styles.spacingLabel}>
                {key.toUpperCase()} - {Math.round(value)}px
              </Text>
              <View
                style={[
                  styles.spacingBox,
                  {
                    height: spacing.sm,
                    width: value,
                  },
                ]}
              />
            </View>
          ))}
        </View>

        {/* Color Palette */}
        <Text style={styles.sectionTitle}>Color Palette</Text>
        <View style={styles.colorContainer}>
          <View style={styles.colorGrid}>
            {/* Primary Colors */}
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.primary, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Primary</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.secondary, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Secondary</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.success, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Success</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.danger, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Danger</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.warning, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Warning</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.info, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Info</Text>
            </View>
            {/* Crypto Colors */}
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.bull, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Bull</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.bear, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Bear</Text>
            </View>
            <View style={styles.colorItem}>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: colors.neutral, borderRadius: radius.sm},
                ]}
              />
              <Text style={styles.colorLabel}>Neutral</Text>
            </View>
          </View>
        </View>

        {/* Border Radius Showcase */}
        <Text style={styles.sectionTitle}>Border Radius Scale</Text>
        <View style={styles.radiusContainer}>
          <View style={styles.radiusGrid}>
            {Object.entries(radius).map(([key, value]) => (
              <View key={key} style={styles.radiusItem}>
                <View
                  style={[
                    styles.radiusBox,
                    {
                      borderRadius: value,
                    },
                  ]}
                />
                <Text style={styles.colorLabel}>
                  {key.toUpperCase()} -{" "}
                  {value === 9999 ? "Full" : `${Math.round(value)}px`}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Crypto Trading Cards */}
        <Text style={styles.sectionTitle}>Crypto Trading Cards</Text>
        {cryptoData.map((crypto, index) => (
          <View key={index} style={styles.cryptoCard}>
            <View style={styles.cryptoHeader}>
              <View>
                <Text style={styles.cryptoName}>{crypto.name}</Text>
                <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
              </View>
              <View style={{alignItems: "flex-end"}}>
                <Text style={styles.cryptoPrice}>{crypto.price}</Text>
                <Text
                  style={[
                    styles.cryptoChange,
                    {
                      color:
                        crypto.change > 0
                          ? colors.bull
                          : crypto.change < 0
                          ? colors.bear
                          : colors.neutral,
                    },
                  ]}>
                  {crypto.change > 0 ? "+" : ""}
                  {crypto.change.toFixed(2)}%
                </Text>
              </View>
            </View>

            <View style={styles.cryptoStats}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Volume</Text>
                <Text style={styles.statValue}>{crypto.volume}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Market Cap</Text>
                <Text style={styles.statValue}>{crypto.marketCap}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Status</Text>
                <Text
                  style={[
                    styles.statValue,
                    {
                      color:
                        crypto.change > 0
                          ? colors.bull
                          : crypto.change < 0
                          ? colors.bear
                          : colors.neutral,
                    },
                  ]}>
                  {crypto.change > 0
                    ? "📈 Bull"
                    : crypto.change < 0
                    ? "📉 Bear"
                    : "➡️ Neutral"}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Trade {crypto.symbol}</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Theme Info */}
        <View style={[styles.cryptoCard, {marginBottom: spacing.xxxl}]}>
          <Text style={[styles.sectionTitle, {marginTop: 0}]}>
            Theme Information
          </Text>
          <Text
            style={{
              fontSize: fontSizes.sm,
              color: colors.textSecondary,
              lineHeight: fontSizes.lg,
            }}>
            Current theme:{" "}
            <Text style={{color: colors.primary, fontWeight: "bold"}}>
              {isDark ? "Dark" : "Light"}
            </Text>
            {"\n"}
            All spacing, radius, and font sizes are responsive using
            react-native-responsive-screen.
            {"\n"}
            Colors automatically adapt to the selected theme mode.
            {"\n"}
            Theme preference is persisted across app launches.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

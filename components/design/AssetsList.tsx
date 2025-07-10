import {useTheme} from "@/theme";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: string;
  value: string;
  logoUrl: string;
  iconColor: string;
}

const AssetsList = () => {
  const {colors, spacing, radius, fontSizes} = useTheme();

  const assets: Asset[] = [
    {
      id: "1",
      name: "USD Tether",
      symbol: "USDT",
      amount: "4029.09",
      value: "$ 8,590.00",
      logoUrl:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
      iconColor: "#26A17B",
    },
    {
      id: "2",
      name: "Ethereum",
      symbol: "ETH",
      amount: "0.00",
      value: "0.00",
      logoUrl:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
      iconColor: "#627EEA",
    },
    {
      id: "3",
      name: "Binance Coin",
      symbol: "BNB",
      amount: "0.23258410",
      value: "$ 8,590.00",
      logoUrl:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png",
      iconColor: "#F3BA2F",
    },
    {
      id: "4",
      name: "Bitcoin",
      symbol: "BTC",
      amount: "0.23258410",
      value: "$ 8,590.00",
      logoUrl:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png",
      iconColor: "#F7931A",
    },
    {
      id: "5",
      name: "Tron",
      symbol: "TRX",
      amount: "0.23258410",
      value: "$ 8,590.00",
      logoUrl:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tron/info/logo.png",
      iconColor: "#FF060D",
    },
    {
      id: "6",
      name: "Solana",
      symbol: "SOL",
      amount: "0.23258410",
      value: "$ 8,590.00",
      logoUrl:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png",
      iconColor: "#9945FF",
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: spacing.xxxl,
    },
    header: {
      fontSize: fontSizes.lg,
      fontWeight: "bold",
      color: colors.text,
      paddingTop: spacing.md,
    },
    assetItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.md,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.divider,
    },
    lastItem: {
      borderBottomWidth: 0,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: radius.full,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.md,
      backgroundColor: colors.background,
      padding: spacing.xs,
    },
    logoImage: {
      width: 32,
      height: 32,
      borderRadius: radius.full,
      resizeMode: "contain",
    },
    assetInfo: {
      flex: 1,
    },
    assetName: {
      fontSize: fontSizes.md,
      fontWeight: "500",
      color: colors.text,
      marginBottom: spacing.xs,
    },
    assetSymbol: {
      fontSize: fontSizes.sm,
      color: colors.textSecondary,
    },
    assetValues: {
      alignItems: "flex-end",
    },
    assetAmount: {
      fontSize: fontSizes.md,
      fontWeight: "600",
      color: colors.text,
      marginBottom: spacing.xs,
    },
    assetValue: {
      fontSize: fontSizes.sm,
      color: colors.textSecondary,
    },
  });

  const renderAsset = ({item, index}: {item: Asset; index: number}) => (
    <TouchableOpacity
      style={[styles.assetItem, index === assets.length - 1 && styles.lastItem]}
      activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Image
          source={{uri: item.logoUrl}}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </View>

      <View style={styles.assetInfo}>
        <Text style={styles.assetName}>{item.name}</Text>
        <Text style={styles.assetSymbol}>{item.symbol}</Text>
      </View>

      <View style={styles.assetValues}>
        <Text style={styles.assetAmount}>{item.amount}</Text>
        <Text style={styles.assetValue}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assets</Text>
      <FlatList
        data={assets}
        renderItem={renderAsset}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AssetsList;

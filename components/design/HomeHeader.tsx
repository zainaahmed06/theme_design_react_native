import React from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
// IconsImports

import {BellIcon, ChatIcon, MoreIcon} from "@/constants/HomeScreenIcons";
import {useTheme} from "@/theme";

const HomeHeader = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.headerContainer}>
      {/* Left-side icon */}
      <TouchableOpacity>
        <MoreIcon brandColor={colors.text} color={colors.text} />
      </TouchableOpacity>

      {/* Search bar */}

      <TextInput
        placeholder='Search...'
        style={{
          backgroundColor: colors.surface,
          flex: 1,
          marginHorizontal: 16,
          borderRadius: 20,
          paddingHorizontal: 16,
        }}
        placeholderTextColor={colors.textSecondary}
        clearButtonMode='always'
      />

      {/* Right-side icons */}
      <View style={styles.rightIconsContainer}>
        {/* Chat icon */}
        <TouchableOpacity style={styles.iconButton}>
          <ChatIcon color={colors.text} />
        </TouchableOpacity>

        {/* Bell icon */}
        <TouchableOpacity style={styles.iconButton}>
          <BellIcon color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  searchInput: {
    fontSize: 14,
    color: "#333",
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
  },
});

export default HomeHeader;

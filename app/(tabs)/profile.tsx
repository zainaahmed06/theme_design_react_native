import {useTheme} from "@/theme";
import React from "react";
import {Text, View} from "react-native";

const Profile = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{color: colors.text}}>Profile</Text>
    </View>
  );
};

export default Profile;

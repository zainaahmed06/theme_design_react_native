import {useTheme} from "@/theme";
import React from "react";
import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const SignIn = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <Text>signin</Text>
    </SafeAreaView>
  );
};

export default SignIn;

import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { Auth } from "~/components/auth";

const Register = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Register",
        }}
      />
      <SafeAreaView>
        <Text className="mx-auto my-4 text-center text-2xl font-bold text-purple-600">
          Register for a new account
        </Text>
        <Auth formType="register" />
      </SafeAreaView>
    </>
  );
};

export default Register;

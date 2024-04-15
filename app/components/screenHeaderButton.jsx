import { signOut } from "firebase/auth";
import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Pressable } from "react-native";
import { FIREBASE_AUTH } from "../fireBaseConfig";

export default function screenHeaderButton({ iconUrl, dimensions }) {
  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <View style={styles.Container}>
      <Pressable style={styles.btnContainer} onPress={handleSignOut}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimensions)}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,

    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "flex-end",
  },
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

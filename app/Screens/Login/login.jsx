import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./login.styles";
import LoginLogo from "../../../assets/Images/login_logo.png";

import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../fireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator, Button } from "react-native-paper";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert("Sign in failed: " + err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (err) {
      alert("Sign Up failed: " + err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
        <View style={styles.imgContainer}>
          <Image width={90} height={90} source={LoginLogo} />
          <Text
            style={{
              fontFamily: "mulishRegular",
              color: "#36A546CC",
              marginTop: 17,
              marginBottom: 49,
            }}
          >
            #We are Electric
          </Text>
          <View style={styles.loginBox}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.login}
              placeholder="E-mail"
              placeholderTextColor={"#727171"}
            ></TextInput>
          </View>
          <View style={styles.loginBox}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.login}
              placeholder="Password"
              placeholderTextColor={"#727171"}
            ></TextInput>
          </View>
          {loading ? (
            <ActivityIndicator size={"large"} color="white" />
          ) : (
            <LinearGradient
              colors={["#008014", "#000000"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btn}
            >
              <Button
                style={styles.btnText}
                textColor="#FFFFFF8C"
                onPress={signIn}
              >
                Login
              </Button>
            </LinearGradient>
          )}
          <Text
            style={{
              fontFamily: "mulishRegular",
              color: "#36A546",
              marginTop: 17,
              marginBottom: 49,
            }}
          >
            Forgot Password?
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

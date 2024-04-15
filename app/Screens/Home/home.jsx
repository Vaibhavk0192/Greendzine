import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import ScreenHeaderButton from "../../components/screenHeaderButton";
import Care from "../../../assets/Images/care.png";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BrandLogo } from "../../components/brandLogo/BrandLogo";
import styles from "./home.styles";
import { BlurView } from "expo-blur";
import { ProgressBar } from "../../components/progressBar/progressBar";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScreenHeaderButton
            iconUrl={Care}
            dimensions={40}
          ></ScreenHeaderButton>
          <View style={{ flex: 1, padding: 15 }}>
            <BrandLogo></BrandLogo>
          </View>
          <BlurView intensity={2} style={styles.contentWrapper}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Employee Productivity Dashboard
              </Text>
            </View>
            <View>
              <ProgressBar percent={4} day={"Monday"} />
              <ProgressBar percent={92} day={"Tuesday"} />
              <ProgressBar percent={122} day={"Wednesday"} />
              <ProgressBar percent={93} day={"Thrusday"} />
              <ProgressBar percent={89} day={"Friday"} />
              <ProgressBar percent={98} day={"Saturday"} />
            </View>
          </BlurView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

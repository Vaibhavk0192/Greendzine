import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 41,
    flexDirection: "row",
  },
  logoImg: { width: 71, height: 70 },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: "#5E5E5EB5",
    borderRadius: 100,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center", 
  },
  circleText: {
    color:"#36A546"
  },
});

export default styles;

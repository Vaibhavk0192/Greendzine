import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#5E5E5E82",
    borderRadius: 20,
    height: 465,
    marginHorizontal: 10,
    opacity: 0.4,

  },
  titleContainer: {
    height: 45,
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A2C2C99",
    marginBottom:30,
  },
  titleText: {
    fontFamily: "sansBold",
    color: "#FFFFFFB3",
    opacity: 0.84,
    fontSize:15,
    letterSpacing: 0.01,
  },
});

export default styles;

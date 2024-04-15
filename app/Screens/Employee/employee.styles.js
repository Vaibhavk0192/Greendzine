import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SearchBoxContainer: {
    height: 55,
    width: 298,
    backgroundColor: "#131414",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  searchBox: {
    fontFamily: "mulishBold",
    color: "white",
    width: 156,
    fontSize: 16,
    marginLeft: 56,
  },
});

export default styles;

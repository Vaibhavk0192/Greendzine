import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    backgroundColor: "#131917",
    marginVertical: 27,
    marginHorizontal: 10,
    borderRadius: 10,
    display: "flex",

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  cellText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 5,
  },
  headText: {
    color: "#838482",
    textAlign: "right",
    display: "flex",
    flex: 2,
  },
});

export default styles;

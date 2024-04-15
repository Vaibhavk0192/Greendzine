import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    backgroundColor: "#37363666",
    display: "flex",
    width: 238,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 61,
    borderRadius: 20,
    height: 42,
    marginBottom: 25,
  },
  login: {
    color: "#FFFFFF8C",
    paddingHorizontal: 20,
    fontFamily: "mulishBold",
  },
  btn: {
    marginTop: 20,
    width: 238,
    height: 42,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2, // Add border width
    borderColor: "#8CFF0026", // Add border color
  },
  btnText: {
    color: "#FFFFFF8C",
    fontFamily: "mulishBold",
  },
});

export default styles;

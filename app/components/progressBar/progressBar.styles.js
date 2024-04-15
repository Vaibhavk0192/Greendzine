import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 50,
    width: "100%",
    alignContent: "center",
    paddingHorizontal:20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    width:300,
  },
  containerText: {
    color: "white",
    textAlign:"left", 
    marginRight:50
  },
  containerPercent: {
    color: "#36A546",
  },
  progressBar: {
    marginVertical:8,
    marginHorizontal:30,
    width:100,
    height: 11,
    backgroundColor: "#36A54680",
    borderRadius:20,
    borderWidth:2,
    borderColor:"#36A546"
  },
});

export default styles;

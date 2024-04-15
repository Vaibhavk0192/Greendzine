import styles from "./progressBar.styles";
import { View, Image, Text } from "react-native";


export const ProgressBar = ({percent,day}) => {
  width=1.7*percent;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.containerText}>Productivity on {day}</Text>
        <Text style={styles.containerPercent}>{percent}%</Text>
      </View>
      <View style={{...styles.progressBar,width:width}}/>

    </View>
  );
};

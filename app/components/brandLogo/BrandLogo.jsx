import styles from "./brandLogo.styles"
import {View,Image,Text} from "react-native"
import Logo from "../../../assets/Images/logo.png"

export const BrandLogo = () => {
  return (
    <View style={styles.logoContainer}>
        <Image source={Logo} resizeMode="cover" style={styles.logoImg}/>
        <View style={styles.circle}>
            <Text style={styles.circleText}>
                4
            </Text>
        </View>
    </View>
  )
}

import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./employeeCard.styles";

import { DataTable } from "react-native-paper";

const EmployeeCard = ({ id, name, dob, role }) => {
  let align = "";
  if (id % 2 == 0) {
    align = "flex-end";
  } else {
    align = "flex-start";
  }
  return (
    <View style={{ ...styles.cardContainer, alignSelf: `${align}` }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <DataTable>
          <DataTable.Row style={{ ...styles.row, borderBottomWidth: 0 }}>
            <DataTable.Cell
              textStyle={{
                textAlign: "right",
                color: "#838482",
                fontFamily: "mulishBold",
              }}
              style={styles.headText}
            >
              EMP ID
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#929694" }}
              style={{ display: "flex", justifyContent: "center", flex: 1 }}
            >
              :
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#929694", fontFamily: "mulishBold" }}
              style={styles.cellText}
              numeric
            >
              {id}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{ ...styles.row, borderBottomWidth: 0 }}>
            <DataTable.Cell
              textStyle={{
                textAlign: "right",
                color: "#838482",
                fontFamily: "mulishBold",
              }}
              style={styles.headText}
            >
              Name
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#929694" }}
              style={{ display: "flex", justifyContent: "center", flex: 1 }}
            >
              :
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#929694", fontFamily: "mulishBold" }}
              style={styles.cellText}
            >
              {name}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{ ...styles.row, borderBottomWidth: 0 }}>
            <DataTable.Cell
              textStyle={{
                textAlign: "right",
                color: "#838482",
                fontFamily: "mulishBold",
              }}
              style={styles.headText}
            >
              DOB
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#929694" }}
              style={{ display: "flex", justifyContent: "center", flex: 1 }}
            >
              :
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#b06e1e", fontFamily: "mulishBold" }}
              style={styles.cellText}
            >
              {dob}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{ ...styles.row, borderBottomWidth: 0 }}>
            <DataTable.Cell
              textStyle={{
                textAlign: "right",
                color: "#838482",
                fontFamily: "mulishBold",
              }}
              style={styles.headText}
            >
              Role
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ color: "#929694" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              :
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{
                color: "#245f2e",
                fontFamily: "mulishBold",
                textAlign: "left",
              }}
              style={styles.cellText}
            >
              {role}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
};

export default EmployeeCard;

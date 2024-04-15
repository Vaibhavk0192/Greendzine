import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ScreenHeaderButton from "../../components/screenHeaderButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BrandLogo } from "../../components/brandLogo/BrandLogo";
import Care from "../../../assets/Images/care.png";
import styles from "./employee.styles";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import EmployeeCard from "../../components/employeeCard/employeeCard";
import { useState } from "react";

const Employee = () => {
  const data = [
    { id: 1, name: "Arjun", dob: "16-1-2000", role: "Software Engineer" },
    { id: 2, name: "Mahesh", dob: "1995-05-05", role: "Developer" },
    { id: 3, name: "Vaibhav", dob: "01-09-2002", role: "Manager" },
    { id: 4, name: "Dhruv", dob: "1988-12-15", role: "Designer" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 50 }}
        >
          <ScreenHeaderButton
            iconUrl={Care}
            dimensions={40}
          ></ScreenHeaderButton>
          <View style={{ flex: 1, padding: 15 }}>
            <BrandLogo></BrandLogo>
          </View>
          <BlurView intensity={10} style={styles.SearchBoxContainer}>
            <TextInput
              style={styles.searchBox}
              placeholder="Search with name"
              placeholderTextColor={"#FFFFFFB3"}
              value={searchQuery}
              onChangeText={handleSearch}
            ></TextInput>
            <Ionicons
              name="search"
              size={25}
              color={"white"}
              style={{ opacity: 0.7 }}
            ></Ionicons>
          </BlurView>
          {filteredData.map((employee) => (
            <EmployeeCard
              key={employee.id}
              id={employee.id}
              name={employee.name}
              dob={employee.dob}
              role={employee.role}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Employee;

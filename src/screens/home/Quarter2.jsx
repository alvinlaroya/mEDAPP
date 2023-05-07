import { useEffect, useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

// react navigation
import { useNavigation } from "@react-navigation/native";

/* EXPORTING FUNCTIONAL COMPONENR FOR MAIN SCREEN/DASHBOARD */
const imagePath = "../../../assets/image";

function Quarter1() {
  const navigation = useNavigation();
  const [takes3, setTakes3] = useState(0);

  useEffect(() => {
    const getTakes = async () => {
      const value1 = await AsyncStorage.getItem("@act3");
      setTakes3(Number(value1));
    };

    getTakes();
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={styles.quarterTitle}>2nd Quarter</Text>
      </View>
      <View style={{ marginTop: "10%" }}>
        <TouchableOpacity onPress={() => navigation.navigate("ThirdActivity")}>
          <View>
            <View style={styles.fullCard}>
              <Image
                style={styles.cardImage}
                source={require(`${imagePath}/second_quarter_week5.jpg`)}
              />
            </View>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              Quantity of a set of objects
            </Text>
            <Text style={{ marginTop: 10, fontSize: 11 }}>
              Number of tries: {takes3}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* DEFINING STYLES FOR COMPONENT */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "white",
  },

  section: {
    padding: 15,
    marginTop: 10,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    height: 190,
    width: 160,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
  },

  fullCard: {
    height: 190,
    width: "100%",
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
  },

  quarterTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  quartSection: {
    marginTop: 15,
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    elevation: 10,
  },
});
/* DEFINING STYLES FOR COMPONENT */

export default Quarter1;

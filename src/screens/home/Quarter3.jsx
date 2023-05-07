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
  const [takes1, setTakes1] = useState(0);
  const [takes2, setTakes2] = useState(0);
  const [takes3, setTakes3] = useState(0);
  const [takes4, setTakes4] = useState(0);

  useEffect(() => {
    const getTakes = async () => {
      const value1 = await AsyncStorage.getItem("@act4");
      const value2 = await AsyncStorage.getItem("@act5");
      const value3 = await AsyncStorage.getItem("@act6");
      const value4 = await AsyncStorage.getItem("@act7");
      setTakes1(Number(value1));
      setTakes2(Number(value2));
      setTakes3(Number(value3));
      setTakes4(Number(value4));
    };

    getTakes();
  });
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={styles.quarterTitle}>3rd Quarter</Text>
      </View>
      <View style={{ marginTop: "10%" }}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("FourthActivity")}
          >
            <View style={{ width: "100%" }}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={require(`${imagePath}/third_quarter_week1.png`)}
                />
              </View>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                Days in a week, Months in a year
              </Text>
              <Text style={{ marginTop: 10, fontSize: 11 }}>
                Number of tries: {takes1}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("FifthActivity")}
          >
            <View style={{ marginTop: 40, width: "100%" }}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={require(`${imagePath}/third_quarter_week5.jpg`)}
                />
              </View>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                Sequence of Events
              </Text>
              <Text style={{ marginTop: 10, fontSize: 11 }}>
                Number of tries: {takes2}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SixthActivity")}
          >
            <View style={{ marginTop: 40, width: "100%" }}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={require(`${imagePath}/third_quarter_week5_2.jpg`)}
                />
              </View>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                Sequence of size or length
              </Text>
              <Text style={{ marginTop: 10, fontSize: 11 }}>
                Number of tries: {takes3}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SeventhActivity")}
          >
            <View style={{ marginTop: 40, marginBottom: 10, width: "100%" }}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={require(`${imagePath}/third_quarter_week8.jpeg`)}
                />
              </View>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                Quantity of a set of objects
              </Text>
              <Text style={{ marginTop: 10, fontSize: 11 }}>
                Number of tries: {takes4}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
    width: "100%",
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

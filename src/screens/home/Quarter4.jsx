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
  const [takes5, setTakes5] = useState(0);
  const [takes6, setTakes6] = useState(0);
  const [takes7, setTakes7] = useState(0);
  const [takes8, setTakes8] = useState(0);

  useEffect(() => {
    const getTakes = async () => {
      const value1 = await AsyncStorage.getItem("@act8");
      const value2 = await AsyncStorage.getItem("@act9");
      const value3 = await AsyncStorage.getItem("@act10");
      const value4 = await AsyncStorage.getItem("@act11");
      const value5 = await AsyncStorage.getItem("@act12");
      const value6 = await AsyncStorage.getItem("@act13");
      const value7 = await AsyncStorage.getItem("@act14");
      const value8 = await AsyncStorage.getItem("@act15");

      setTakes1(Number(value1));
      setTakes2(Number(value2));
      setTakes3(Number(value3));
      setTakes4(Number(value4));
      setTakes5(Number(value5));
      setTakes6(Number(value6));
      setTakes7(Number(value7));
      setTakes8(Number(value8));
    };

    getTakes();
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={styles.quarterTitle}>4th Quarter</Text>
      </View>
      <View style={{ marginTop: "10%" }}>
        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("EighthActivity")}
            >
              <View style={{ width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week6.jpg`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Name the hour and minute hands in a clock
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes1}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("NinthActivity")}
            >
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week6_2.jpg`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Tell time by the hour
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes2}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TenthActivity")}
            >
              <View style={{ marginTop: 40, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week7.png`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Identify the numbers
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes3}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("EleventhActivity")}
            >
              <View style={{ marginLeft: 20, marginTop: 40, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week7_2.jpeg`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Arrange three numbers
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes4}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TwelveActivity")}
            >
              <View style={{ marginTop: 40, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week8.jpeg`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Recognize the word
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes5}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ThirteenthActivity")}
            >
              <View style={{ marginLeft: 20, marginTop: 40, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week9.png`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Add quantities up to 10
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes6}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("FourteenthActivity")}
            >
              <View style={{ marginTop: 40, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week9_2.png`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Subtract quantities up to 10
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes7}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FifteenthActivity")}
            >
              <View style={{ marginLeft: 20, marginTop: 40, width: 160 }}>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={require(`${imagePath}/fourth_quarter_week10.png`)}
                  />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Addition and Subtraction number sentence
                </Text>
                <Text style={{ marginTop: 10, fontSize: 11 }}>
                  Number of tries: {takes8}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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

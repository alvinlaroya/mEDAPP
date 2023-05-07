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

  useEffect(() => {
    const getTakes = async () => {
      const value1 = await AsyncStorage.getItem("@act1");
      const value2 = await AsyncStorage.getItem("@act2");
      setTakes1(Number(value1));
      setTakes2(Number(value2));
    };

    getTakes();
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={styles.quarterTitle}>1st Quarter</Text>
      </View>
      <View style={{ marginTop: "10%" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate("FirstActivity")}
          >
            <View style={{ width: 160 }}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={require(`${imagePath}/first_quarter_week3.jpg`)}
                />
              </View>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                Sort and classify objects
              </Text>
              <Text style={{ marginTop: 5, fontSize: 11 }}>
                Number of tries: {takes1}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SecondActivity")}
          >
            <View style={{ marginLeft: 20, width: 160 }}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={require(`${imagePath}/first_quarter_week6_2.jpg`)}
                />
              </View>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                Recognize symmetry
              </Text>
              <Text style={{ marginTop: 5, fontSize: 11 }}>
                Number of tries: {takes2}
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

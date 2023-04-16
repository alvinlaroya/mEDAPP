import { useEffect, useState } from "react";

import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, IconButton, List } from "react-native-paper";

import AsyncStorage from '@react-native-async-storage/async-storage';

// components


/* EXPORTING FUNCTIONAL COMPONENR FOR MAIN SCREEN/DASHBOARD */
const imagePath = "../../../assets/image"

const App = () => {
  const navigation = useNavigation();
  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const valueq1 = await AsyncStorage.getItem('@quarter1');
        const valueq2 = await AsyncStorage.getItem('@quarter2');
        const valueq3 = await AsyncStorage.getItem('@quarter3');
        const valueq4 = await AsyncStorage.getItem('@quarter4');

        setQ1(valueq1 ? valueq1 : 0);
        setQ2(valueq2 ? valueq2 : 0);
        setQ3(valueq3 ? valueq3 : 0);
        setQ4(valueq4 ? valueq4 : 0);
      } catch (e) {
        // error reading value
      }
    }

    getData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title="Main Activity"
          titleStyle={{
            color: "black",
            fontSize: 19,
            fontWeight: 'bold',
          }}
        />
      </Appbar.Header>
      <ScrollView styles={styles.container}>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>1st Quarter ({q1}%)</Text>
          <View style={styles.quartSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => navigation.navigate("FirstActivity")}>
                <View style={{ width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/first_quarter_week3.jpg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Sort and classify objects</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SecondActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/first_quarter_week6_2.jpg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Recognize symmetry</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>2nd Quarter ({q2}%)</Text>
          <View style={styles.quartSection}>
            <TouchableOpacity onPress={() => navigation.navigate("ThirdActivity")}>
              <View>
                <View style={styles.fullCard}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/second_quarter_week5.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Quantity of a set of objects</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>3rd Quarter ({Math.round(q3)}%)</Text>
          <View style={styles.quartSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => navigation.navigate("FourthActivity")}>
                <View style={{ width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week1.png`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Days in a week, Months in a year</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("FifthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week5.jpg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Sequence of Events</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SixthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week5_2.jpg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Sequence of size or length</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SeventhActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week8.jpeg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Quantity of a set of objects</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>4th Quarter ({q4}%)</Text>
          <View style={styles.quartSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => navigation.navigate("EighthActivity")}>
                <View style={{ width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week6.jpg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Name the hour and minute hands in a clock</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("NinthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week6_2.jpg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Tell time by the hour</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("TenthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week7.png`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Identify the numbers</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("EleventhActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week7_2.jpeg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Arrange three numbers</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("TwelveActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week8.jpeg`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Recognize the word</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("ThirteenthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week9.png`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Add quantities up to 10</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("FourteenthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week9_2.png`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Subtract quantities up to 10</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("FifteenthActivity")}>
                <View style={{ marginLeft: 20, width: 160 }}>
                  <View style={styles.card}>
                    <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week10.png`)} />
                  </View>
                  <Text style={{ marginTop: 10 }}>Addition and Subtraction number sentence</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* END OF EXPORTING FUNCTIONAL COMPONENR FOR MAIN SCREEN/DASHBOARD */


/* DEFINING STYLES FOR COMPONENT */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "white",
  },

  section: {
    padding: 15,
    marginTop: 10
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
    marginBottom: 5
  },

  fullCard: {
    height: 190,
    width: "100%",
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5
  },

  quarterTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  quartSection: {
    marginTop: 15
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    elevation: 10
  }
});
/* DEFINING STYLES FOR COMPONENT */

export default App;

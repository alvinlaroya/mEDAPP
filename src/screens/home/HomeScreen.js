import { useEffect } from "react";

import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, IconButton, List } from "react-native-paper";

// components


const imagePath = "../../../assets/image"

const App = () => {
  const navigation = useNavigation();

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
          <Text style={styles.quarterTitle}>1st Quarter</Text>
          <View style={styles.quartSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/first_quarter_week3.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Sort and classify objects</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/first_quarter_week6_2.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Recognize symmetry</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>2nd Quarter</Text>
          <View style={styles.quartSection}>
            <View>
              <View style={styles.fullCard}>
                <Image style={styles.cardImage} source={require(`${imagePath}/second_quarter_week5.jpg`)} />
              </View>
              <Text style={{ marginTop: 10 }}>Quantity of a set of objects</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>3rd Quarter</Text>
          <View style={styles.quartSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week1.png`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Days in a week, Months in a year</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week5.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Sequence of Events</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week5_2.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Sequence of size or length</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/third_quarter_week8.jpeg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Quantity of a set of objects</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.quarterTitle}>4th Quarter</Text>
          <View style={styles.quartSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week6.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Name the hour and minute hands in a clock</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week6_2.jpg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Tell time by the hour</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week7.png`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Identify the numbers</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week7_2.jpeg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Arrange three numbers</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week8.jpeg`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Recognize the word</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week9.png`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Add quantities up to 10</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week9_2.png`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Subtract quantities up to 10</Text>
              </View>
              <View style={{ marginLeft: 20, width: 160 }}>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={require(`${imagePath}/fourth_quarter_week10.png`)} />
                </View>
                <Text style={{ marginTop: 10 }}>Addition and Subtraction number sentence</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default App;

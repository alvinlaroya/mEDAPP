import { useEffect, useState } from "react";

import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from "react-native";


// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, Button, List } from "react-native-paper";

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
          title="m-EdApp"
          titleStyle={{
            color: "black",
            fontSize: 18,
            fontWeight: 'bold',
          }}
        />
      </Appbar.Header>
      <ScrollView styles={styles.container}>
        <View style={styles.section}>
          <View>
            <View style={{ display: 'flex', alignItems: 'flex-end', padding: 10 }}>
              <Text style={{ fontSize: 20 }}>2 Items</Text>
            </View>
            <Button mode="outlined" style={{ justifyContent: 'center' }} labelStyle={{ color: 'black', fontSize: 18, fontWeight: 'bold', height: 50, marginBottom: -10, marginTop: 25 }} onPress={() => navigation.navigate("Quarter1")}>
              First Quarter ({q1}%)
            </Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ display: 'flex', alignItems: 'flex-end', padding: 10 }}>
              <Text style={{ fontSize: 20 }}>1 Items</Text>
            </View>
            <Button mode="outlined" style={{ justifyContent: 'center' }} labelStyle={{ color: 'black', fontSize: 18, fontWeight: 'bold', height: 50, marginBottom: -10, marginTop: 25 }} onPress={() => navigation.navigate("Quarter2")}>
              Second Quarter ({q2}%)
            </Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ display: 'flex', alignItems: 'flex-end', padding: 10 }}>
              <Text style={{ fontSize: 20 }}>4 Items</Text>
            </View>
            <Button mode="outlined" style={{ justifyContent: 'center' }} labelStyle={{ color: 'black', fontSize: 18, fontWeight: 'bold', height: 50, marginBottom: -10, marginTop: 25 }} onPress={() => navigation.navigate("Quarter3")}>
              Third Quarter ({q3}%)
            </Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ display: 'flex', alignItems: 'flex-end', padding: 10 }}>
              <Text style={{ fontSize: 20 }}>8 Items</Text>
            </View>
            <Button mode="outlined" style={{ justifyContent: 'center' }} labelStyle={{ color: 'black', fontSize: 18, fontWeight: 'bold', height: 50, marginBottom: -10, marginTop: 25 }} onPress={() => navigation.navigate("Quarter4")}>
              Fourth Quarter ({q4}%)
            </Button>
          </View>
          <View style={{ marginTop: 15 }}>
            <Button mode="outlined" style={{ justifyContent: 'center' }} labelStyle={{ color: 'black', fontSize: 18, fontWeight: 'bold', height: 50, marginBottom: -10, marginTop: 25 }} onPress={() => navigation.navigate("Disclaimer")}>
              Disclaimer
            </Button>
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
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "white",
  },

  section: {
    padding: 15,
    marginTop: 10,
    justifyContent: 'center',
  },
});
/* DEFINING STYLES FOR COMPONENT */

export default App;

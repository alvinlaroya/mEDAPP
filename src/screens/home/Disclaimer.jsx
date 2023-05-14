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

function Disclamer() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 60, fontWeight: "bold" }}>Disclaimer</Text>
      </View>
      <View style={{ marginTop: "50%" }}>
        <Text style={{ fontSize: 30 }}>
          Copyright disclaimer: The developers do not own the videos nor the
          images featured in the application all rights belong to its rightful
          owner/owners no copyright infringement intended.
        </Text>
      </View>
    </View>
  );
}

export default Disclamer;

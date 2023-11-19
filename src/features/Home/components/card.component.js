import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../../../components/text/text.component";
import { useNavigation } from "@react-navigation/native";

const Card = ({ pokemon }) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 5 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { pokemon })}
      >
        <Text variant="item"> {`-> ${pokemon.name}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

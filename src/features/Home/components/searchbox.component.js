import React from "react";
import { View, TextInput } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={handleChange}
      selectionColor={colors.ui.icons}
      style={{
        backgroundColor: colors.ui.tertiary,
        padding: 10,
        borderRadius: 5,
      }}
    />
  );
};

export default Searchbox;

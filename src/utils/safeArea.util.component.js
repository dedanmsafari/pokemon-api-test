import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-Top:${StatusBar.currentHeight}px`};
`;

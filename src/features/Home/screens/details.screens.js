import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { ImageBlock, ImageButton } from "./details.styles";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/text/text.component";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import styled from "styled-components";
import { getData } from "../../../utils/getData";

const HomeSafeAreaView = styled(StyledSafeAreaView)`
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const DetailsScreen = ({ route, navigation }) => {
  const { pokemon } = route.params;

  const [image, setImage] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const data = await getData(pokemon.url);

      const image = await getData(data.forms[0].url);
      setImage(image);
    };
    getInfo();
  }, [pokemon]);

  const fallbackImage = require("../../../../assets/fallback.png");
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HomeSafeAreaView>
        <ImageBlock>
          <Image
            style={{ height: 380, width: 400, resizeMode: "contain" }}
            defaultSource={fallbackImage}
            source={
              image ? { uri: image?.sprites?.front_shiny } : fallbackImage
            }
          />
        </ImageBlock>
        <Spacer size="large" />
        <Text variant="title">Name: {pokemon.name}</Text>
        <Spacer size="large" />
        <Text>External URL: {pokemon.url}</Text>
        <Spacer size="large" />
        <ImageButton onPress={() => navigation.goBack()}>
          <Text style={{ color: "white" }}>Go Back</Text>
        </ImageButton>
      </HomeSafeAreaView>
    </View>
  );
};

export default DetailsScreen;

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import styled from "styled-components/native";
import Text from "../../../components/text/text.component";
import Spacer from "../../../components/spacer/spacer.component";
import Searchbox from "../components/searchbox.component";
import CardList from "../components/cardlist.component";
import { getData } from "../../../utils/getData";
import { colors } from "../../../infrastructure/theme/colors";

const HomeSafeAreaView = styled(StyledSafeAreaView)`
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const fetchPokemons = async (url) => {
    const pokemonsResult = await getData(url);

    setPokemons(pokemonsResult.results);
    setNextUrl(pokemonsResult.next);
    setPrevUrl(pokemonsResult.previous);
  };

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  useEffect(() => {
    const filteredPokemons = pokemons.filter((p) =>
      p.name.includes(searchField.toLowerCase())
    );
    setFilteredPokemons(filteredPokemons);
  }, [searchField, pokemons]);

  const onSearchChange = (value) => {
    setSearchField(value);
  };

  const handleNextPage = () => {
    if (nextUrl) {
      fetchPokemons(nextUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevUrl) {
      fetchPokemons(prevUrl);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HomeSafeAreaView>
        <Text variant="title">THE POKEMON API</Text>
        <Spacer size="medium" />
        <Searchbox
          placeholder="Search your favourite Pokemon..."
          handleChange={onSearchChange}
        />
        <Spacer size="small" />
        <CardList pokemons={filteredPokemons} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={handlePrevPage} disabled={!prevUrl}>
            <Text
              variant="steps"
              style={{ color: !prevUrl ? "gray" : colors.ui.icons }}
            >
              Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPage} disabled={!nextUrl}>
            <Text variant="steps">Next</Text>
          </TouchableOpacity>
        </View>
      </HomeSafeAreaView>
    </View>
  );
};

export default HomeScreen;

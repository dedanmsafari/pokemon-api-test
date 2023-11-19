import { ScrollView } from "react-native";
import Card from "./card.component";

const CardList = ({ pokemons }) => {
  return (
    <ScrollView>
      {pokemons.map((p) => (
        <Card key={p.name} pokemon={p} />
      ))}
    </ScrollView>
  );
};

export default CardList;

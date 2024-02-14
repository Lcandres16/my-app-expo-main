import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, ScrollView, View } from "tamagui";
import CharacterCard from "../Character-card/CharacterCard";
import CharactersForm from "../Character-card/CharactersForm";
import { deleteCharacter, fetchCharacters } from "../peticiones/Petitions";

interface Character {
  id: number;
  // Define la estructura de un personaje según tu aplicación
}

const Layout: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [cardsToShow, setCardsToShow] = useState<number>(3);
  const [visibleCards, setVisibleCards] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCharacters("characters");
        setCharacters(data);
      } catch (error) {
        console.error("Error al obtener datos de personajes:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleCards(characters.slice(0, cardsToShow));
  }, [characters, cardsToShow]);

  const handleDeleteCharacter = async (characterId: number) => {
    try {
      await deleteCharacter(characterId);
      setCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character.id !== characterId)
      );
    } catch (error) {
      console.error("Error al eliminar el personaje:", error);
    }
  };

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height) {
      setCardsToShow(cardsToShow + 3);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        onScroll={(event) => handleScroll(event)}
        scrollEventThrottle={400}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            paddingBottom: 0
          }}
        >
          {visibleCards.map((character) => (
            <CharacterCard
              key={character.id}
              data={character}
              handleDelete={() => handleDeleteCharacter(character.id)}
              handleEdit={() => {}}
              style={{ marginBottom: 10 }}
            />
          ))}
        </View>
      </ScrollView>

      <Button
        onPress={() => setShowForm(true)}
        style={{
          backgroundColor: "#EDF0F7",
          borderRadius: 50,
          padding: 10,
          height: 64,
          width: 64,
          position: "absolute",
          right: 20,
          bottom: 20
        }}
      >
        <MaterialCommunityIcons
          name="plus"
          size={40}
          color="#EDF0F7"
          style={{ borderRadius: 50 }}
        />
      </Button>

      {showForm && (
        <CharactersForm
          onSubmit={(newCharacter) => {
            setCharacters([...characters, newCharacter]);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
          initialCharacter={{}} // Asegúrate de proporcionar la estructura correcta para el personaje inicial
        />
      )}
    </View>
  );
};

export default Layout;

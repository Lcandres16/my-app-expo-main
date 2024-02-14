import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ScenesFormProps {
  initialData: {
    id: Long;
    description: string;
    budget: string;
    hours: Int;
    filmId: Long;
  };
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const API_URL = "http://192.168.18.5:8083";

const ScenesForm: React.FC<ScenesFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [description, setDescription] = useState(initialData.description || "");
  const [budget, setBudget] = useState(initialData.budget || "");
  const [hours, setHours] = useState(initialData.hours ? initialData.hours.toString() : "");
  const [filmId, setFilmId] = useState(initialData.filmId ? initialData.filmId.toString() : "");

  const handleSubmit = () => {
    const entityData = {
      description,
      budget,
      hours: parseInt(hours),
      filmId: parseInt(filmId)
    };
    fetch(`${API_URL}/scene`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entityData)
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
        setDescription("");
        setBudget("");
        setHours("");
        setFilmId("");
      })
      .catch((error) =>
        console.error("Error al enviar los datos al servidor:", error)
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Scenes Form</Text>
        <TouchableOpacity
          onPress={onCancel}
          style={styles.closeIcon}
        >
          <MaterialCommunityIcons
            name="close"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../images/scene.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter description"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Budget</Text>
        <TextInput
          style={styles.input}
          value={budget}
          onChangeText={(text) => setBudget(text)}
          placeholder="Enter budget"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hours</Text>
        <TextInput
          style={styles.input}
          value={hours}
          onChangeText={(text) => setHours(text)}
          placeholder="Enter hours"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Film ID</Text>
        <TextInput
          style={styles.input}
          value={filmId}
          onChangeText={(text) => setFilmId(text)}
          placeholder="Enter film ID"
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create Scene</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeIcon: {},
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#900000",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ScenesForm;

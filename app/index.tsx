import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Button, H1, Card } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  const handleBegin = () => {
    router.push("/tabs");
  };

  return (
    <MySafeAreaView style={styles.container}>
      <MyStack>
        <View style={styles.cardContainer}>
          <Card style={styles.largeCard}>
            <Image
              source={require("../assets/camera2.png")}
              style={styles.image}
            />
            <H1 style={styles.title}>Eviel Dead</H1>
          </Card>
        </View>
        
        <Button onPress={handleBegin} style={styles.button}>
          Begin
        </Button>
      </MyStack>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DADFEF",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DADFEF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  largeCard: {
    width: "120%",
    height: 750,
    padding: 50,
    alignItems: "center",
    backgroundColor: "#DADFEF",
  },
  image: {
    width: "110%",
    height: 380,
    resizeMode: "cover",
    borderRadius: 16,
  },
  title: {
    marginTop: 65,
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 15,
  },
  button: {
    marginTop: 100,
    color: "#FFFFFF",
    fontSize: 20,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#7B839B",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});

import { ScrollView, StyleSheet, Text } from "react-native";

import Card from "./components/Card";
import LibroItem from "./components/LibroItem";

export default function Ejercicio5() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Libros y categorías</Text>

      <Card>
        <LibroItem titulo="Drácula" />
        <Text style={styles.categoria}>Terror clásico</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categoria: {
    color: "#888",
    fontSize: 12,
    marginTop: 5,
  },
});
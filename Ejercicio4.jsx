import { ScrollView, StyleSheet, Text } from "react-native";

import Card from "./components/Card";
import LibroItem from "./components/LibroItem";

const libros = [
  { id: "1", titulo: "La pepi" },
  { id: "2", titulo: "La pepi 2" },
  { id: "3", titulo: "La pepi 3" },
];

export default function Ejercicio4() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de libros</Text>

      {libros.map((l) => (
        <Card key={l.id}>
          <LibroItem titulo={l.titulo} />
        </Card>
      ))}
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
});
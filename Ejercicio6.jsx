import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import LibroItem from "./components/LibroItem";

const librosIniciales = [
    { id: "1", titulo: "Drácula" },
    { id: "2", titulo: "Frankenstein" },
];

export default function Ejercicio6() {
    const [libros] = useState(librosIniciales);

    // Error2: Card no utiliza la propiedad contenido

    return (
        <View style={styles.contenedor}>
            <Card>
                <Text>Portada</Text>
            </Card>

    // Error3: Falta key={l.id} en el Card.

            {libros.map((l) => (
                <Card key={l.id}>
                    <LibroItem titulo={l.titulo} />
                </Card>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 20,
    },
});
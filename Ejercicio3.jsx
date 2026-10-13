import { useState } from "react";
import { Button, Text, View } from "react-native";
import CampoTexto from "./components/CampoTexto";

export default function App() {

    const [titulo, setTitulo] = useState("");
    const [libros, setLibros] = useState([]);

    const add = () => {
        if (!titulo.trim()) return;
        setLibros([...libros, titulo.trim()]);
        setTitulo("");
    };

    return (
        <View>
            <CampoTexto placeholder="Indica el titulo del libro"
                value={titulo}
                onChangeText={setTitulo} />

            <Button title="Añadir" onPress={add} />

            {libros.map((libro, index) => (
                <Text key={index}>{libro}</Text>
            ))}
        </View>
    );
}

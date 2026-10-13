import { Text, View } from "react-native";
import Card from "./components/Card";
export default function App() {
    return (
        <View>
            <Card>
                <Text>Comprar pan</Text>
            </Card>
        </View>
    );

    // 1. No sale ningun error pero no se ve.
    // 2. No sale ningun texto.
    // 3. Pasa porque el View que contiene el Card no puede enseñar nada.
}
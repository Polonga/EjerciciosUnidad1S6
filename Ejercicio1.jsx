import { Text, View } from "react-native";
import Card from "./components/Card";

export default function App() {
    return (
        <Card>
            <Text>Un solo texto</Text>

            // 2. Si se ven.

            <Text>Otro texto</Text>
            <Text>Tercer texto</Text>

            // 3. Si, sigue funcionando igual.
            <View>
                <Text>Cuarto texto</Text>
            </View>
        </Card>
    );
}

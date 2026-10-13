import { TextInput } from "react-native";

export default function CampoTexto({ placeholder, value, onChangeText }) {

    return(
        <TextInput
            placeholder={placeholder}
            value = {value}
            onChangeText={onChangeText}
        />
    );
}

import { View, StyleSheet } from "react-native";

// Error1: No recibe el children.

export default function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
    },
});
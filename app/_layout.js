import { Stack } from "expo-router";

export default function IndexLayout() {
    return <Stack>
        <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="DashboardScreen" options={{ headerShown: false }} />
    </Stack>
}
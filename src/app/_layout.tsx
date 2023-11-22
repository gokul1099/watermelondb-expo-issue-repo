import { Stack, useRouter } from "expo-router";
import react from "react";
import { database } from "../lib/watermelon";
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
function Layout() {

    return (
        <DatabaseProvider database={database}>
            <Stack>
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="Notes" options={{ title: "Notes" }} />
            </Stack>
        </DatabaseProvider>
    )

}


export default Layout
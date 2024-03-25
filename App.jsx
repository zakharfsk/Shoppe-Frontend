import Navigation from "./components/Navigation";
import {AuthProvider} from "./context/AuthContext";
import {StatusBar} from "react-native";

export default function App() {
    return <AuthProvider>
        <StatusBar barStyle={"light-content"}/>
        <Navigation/>
    </AuthProvider>
}

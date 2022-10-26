import "react-native-gesture-handler";
import { AuthProvider } from "./AuthContext";
import AppNav from "./navigator/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

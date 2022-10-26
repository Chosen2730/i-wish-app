import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/homeScreen";
import GiftBox from "../screens/TabScreens/giftBox";
import WishList from "../screens/TabScreens/wishList";
import Wallet from "../screens/TabScreens/wallet";
import Profile from "../screens/TabScreens/profile";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7805A7",
        tabBarInactiveTintColor: "#ABAAAA",
        tabBarStyle: { height: 50 },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Wish List'
        component={WishList}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-color-wand-outline' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Gift Box'
        component={GiftBox}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='gift-outline' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={Wallet}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='wallet-outline' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profiles'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-circle' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabStack;

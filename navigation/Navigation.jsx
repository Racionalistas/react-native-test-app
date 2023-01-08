import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FullPost from "../pages/FullPost";
import PostPage from "../pages/PostPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PostPage" component={PostPage} options={{ title: 'Тестовая новостная страница' }} />
                <Stack.Screen name="FullPost" component={FullPost} options={{ title: 'Статья' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
import axios from "axios";
import React from 'react';
import { Text, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity, View } from "react-native";
import PostElement from "../components/PostElement"

const PostPage = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [items, setItems] = React.useState();
    const fetchPosts = () => {
        setIsLoading(true);
        axios.get('https://trycode.pw/c/F2L32.json')
            .then(({ data }) => { setItems(data); })
            .catch(e => console.log(e))
            .finally(() => { setIsLoading(false) })
    };
    React.useEffect(fetchPosts, []);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size="large" />
                <Text style={{ marginTop: 10 }}>Загрузка...</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
                        <PostElement title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default PostPage;
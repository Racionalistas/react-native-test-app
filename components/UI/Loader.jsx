import { Text, View, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Загрузка...</Text>
    </View>
  );
};

export default Loader;
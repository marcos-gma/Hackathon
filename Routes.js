import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function RoutesScreen() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get('https://api.suape.com.br/bus/routes') // Exemplo de endpoint
      .then(response => setRoutes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList 
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.city}</Text>
        )}
      />
    </View>
  );
}

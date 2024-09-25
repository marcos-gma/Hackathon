import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function LocationScreen() {
  const [busLocation, setBusLocation] = useState({
    latitude: -8.391, 
    longitude: -34.960, 
    latitudeDelta: 0.0922, 
    longitudeDelta: 0.0421
  });

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={busLocation}
    >
      <Marker coordinate={busLocation} title="Ônibus Suape" />
    </MapView>
  );
}

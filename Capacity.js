import React, { useState } from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';

export default function CapacityScreen() {
  const [capacity, setCapacity] = useState(0.75); // 75% ocupado

  return (
    <View style={{ padding: 20 }}>
      <Text>Lotação atual do ônibus:</Text>
      <ProgressBarAndroid 
        styleAttr="Horizontal" 
        indeterminate={false} 
        progress={capacity} 
        color="#ff5722"
      />
    </View>
  );
}

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, cards } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ClockValuesAndIdentities = () => {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ opacity: show ? 1 : 0 }}>
          <Card card={cards[0]} />
        </View>
      </View>
    </View>
  );
};

export default ClockValuesAndIdentities;

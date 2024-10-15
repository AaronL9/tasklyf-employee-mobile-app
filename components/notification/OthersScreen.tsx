import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OthersScreen = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>No other notifications available.</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#555' },
});

export default OthersScreen;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NoTasksScreen = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require('../../assets/images/no-task.png')} 
        style={styles.noTaskImage}
      />
      <Text style={styles.EmptyText}>No Ongoing Task!</Text>
      <Text style={styles.SubEmptyText}>It looks like you don't have any tasks at the moment.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  noTaskImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  EmptyText: {
    fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
  },
  SubEmptyText: {
    fontSize: 20,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
  },
});

export default NoTasksScreen;
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import NotificationItem from './NotificationItem'; // Import the NotificationItem component

const data = [
  { id: '1', name: 'Patrick Antonio', email: 'patrickantonio@gmail.com', type: 'Apartment', service: 'Bedbugs Control', time: 'Just now' },
  { id: '2', name: 'Jeffrey Lomibao', email: 'jeffreylomibao@gmail.com', type: 'House', service: 'Kitchen Cleaning', time: '1 hour ago' },
  { id: '3', name: 'Ricarte Naraja', email: 'ricartenaraja@gmail.com', type: 'House', service: 'Bathroom Cleaning', time: 'Yesterday' },
  { id: '4', name: 'Carlo Francisco', email: 'carlofrancisco@gmail.com', type: 'House', service: 'Bathroom Cleaning', time: '2 days ago' }
];

const BookingsScreen = () => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <NotificationItem item={item} />}
    showsVerticalScrollIndicator={false}
  />
);

export default BookingsScreen;
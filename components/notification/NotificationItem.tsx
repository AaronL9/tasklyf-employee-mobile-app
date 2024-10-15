import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface NotificationItemProps {
  item: {
    id: string;
    name: string;
    email: string;
    type: string;
    service: string;
    time: string;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => (
  <View style={styles.notificationWrapper}>
    <Text style={styles.time}>{item.time}</Text>
    {/* Notification Box */}
    <View style={styles.notificationItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text style={styles.type}>{item.type}:</Text>
      <Text style={styles.service}>{item.service}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  notificationWrapper: { marginVertical: 20 },
  notificationItem: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0066cc',
  },
  type: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  service: {
    color: '#555',
    marginTop: 5,
  },
  time: {
    position: 'absolute',
    top: -20,
    right: 0,
    color: '#999',
    fontSize: 12,
  },
});

export default NotificationItem;
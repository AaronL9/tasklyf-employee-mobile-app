// components/ProfileComponents.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Modal } from 'react-native';

export const Header = () => (
  <View style={styles.header}>
    <Image
      source={require('../../assets/images/favicon.png')}
      style={styles.profileImage}
    />
    <Text style={styles.profileName}>Ricarte Naraja</Text>
    <Text style={styles.profileEmail}>@ricarte9</Text>
    <TouchableOpacity style={styles.editProfileButton}>
      <Text style={styles.editProfileText}>Edit Profile</Text>
    </TouchableOpacity>
  </View>
);

export const Menu = ({ handleLogout }: { handleLogout: () => void }) => {
  const menuItems = [
    { title: 'Account' },
    { title: 'Change Password' },
    { title: 'Help Center' },
    { title: 'Rate us' },
    { title: 'FAQ’s' },
    { title: 'Privacy Policy' },
    { title: 'Logout' },
  ];

  return (
    <View style={styles.menu}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => item.title === 'Logout' && handleLogout()}
        >
          <Text style={styles.menuText}>{item.title}</Text>
          {item.title === 'Account' ? (
            <Text>ricartenaraja@gmail.com</Text>
          ) : (
            <Image
              source={require('../../assets/images/icon.png')}
              style={styles.menuArrow}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const LogoutModal = ({
  visible,
  onClose,
  onConfirm,
}: {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.handleBar} />
        <Text style={styles.modalTitle}>Log out</Text>
        <Text style={styles.modalMessage}>Are you sure you want to log out?</Text>
        <View style={styles.modalButtons}>
          <Pressable style={styles.modalButtonYes} onPress={onConfirm}>
            <Text style={styles.modalButtonTextYes}>Yes</Text>
          </Pressable>
          <Pressable style={styles.modalButtonNo} onPress={onClose}>
            <Text style={styles.modalButtonTextNo}>No</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  editProfileButton: {
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  editProfileText: {
    color: '#007bff',
    fontSize: 10,
  },
  menu: {
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    width: 18,
    height: 18,
    marginLeft: 'auto',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheetContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 35,
    color: '#888',
  },
  modalButtons: {
    width: '100%',
    alignItems: 'center',
  },
  modalButtonYes: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  modalButtonNo: {
    backgroundColor: '#D7D7D7',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
  },
  modalButtonTextYes: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButtonTextNo: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default { Header, Menu, LogoutModal };
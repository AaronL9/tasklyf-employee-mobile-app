import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

type LogoutModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function LogoutModal(props: LogoutModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.handleBar} />
          <Text style={styles.modalTitle}>Log out</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.modalButtons}>
            <Pressable style={styles.modalButtonYes} onPress={props.onConfirm}>
              <Text style={styles.modalButtonTextYes}>Yes</Text>
            </Pressable>
            <Pressable style={styles.modalButtonNo} onPress={props.onClose}>
              <Text style={styles.modalButtonTextNo}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheetContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 35,
    color: "#888",
  },
  modalButtons: {
    width: "100%",
    alignItems: "center",
  },
  modalButtonYes: {
    backgroundColor: "#007AFF",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  modalButtonNo: {
    backgroundColor: "#D7D7D7",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 15,
  },
  modalButtonTextYes: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalButtonTextNo: {
    color: "#888",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "@/components/profile/Header";
import ProfileMenu from "@/components/profile/ProfileMenu";
import LogoutModal from "@/components/profile/LogoutModal";

const ProfileScreen = () => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    console.log("Logged out successfully.");
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <ProfileMenu handleLogout={handleLogout} />
      <LogoutModal
        visible={logoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
        onConfirm={confirmLogout}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default ProfileScreen;

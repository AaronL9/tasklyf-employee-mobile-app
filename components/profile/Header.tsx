import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Ricarte Naraja</Text>
      <Text style={styles.profileEmail}>@ricarte9</Text>
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
  editProfileButton: {
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007bff",
  },
  editProfileText: {
    color: "#007bff",
    fontSize: 10,
  },
});

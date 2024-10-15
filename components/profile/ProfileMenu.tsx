import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";

type Props = {
  handleLogout: () => void;
};

export default function ProfileMenu({ handleLogout }: Props) {
  const menuItems = [
    { title: "Account" },
    { title: "Change Password" },
    { title: "Help Center" },
    { title: "Rate us" },
    { title: "FAQ’s" },
    { title: "Privacy Policy" },
    { title: "Logout" },
  ];

  return (
    <View style={styles.menu}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => item.title === "Logout" && handleLogout()}
        >
          <Text style={styles.menuText}>{item.title}</Text>
          {item.title === "Account" ? (
            <Text>ricartenaraja@gmail.com</Text>
          ) : (
            <FontAwesome6
              name="greater-than"
              size={14}
              color={Colors["primary-grey"]}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    width: 18,
    height: 18,
    marginLeft: "auto",
  },
});

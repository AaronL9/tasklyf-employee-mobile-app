import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,

} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BookingSection from '@/components/home/BookingSection';
import EarningSection from '@/components/home/EarningSection';
import FeedbackSection from '@/components/home/FeedbackSection';
const Home = () => {
  return (
    <GestureHandlerRootView style={styles.safeArea}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Banner (1).png')}
          style={styles.logoImage}
        />
      </View>

      {/* Greeting Container */}
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          }}
          style={styles.profile}
        />
        <View style={styles.texts}>
          <Text style={styles.greetingText}>Good morning,</Text>
          <Text style={styles.nameText}>Ricarte!</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Bookings Section */}
          <BookingSection />
          {/* Earnings Section */}
          <EarningSection />
          {/* Customer Feedbacks Section */}
          <FeedbackSection />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#007AFF',
    padding: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  greetingText: {
    color: '#E2FF04',
    fontSize: 22,
  },
  nameText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profile: {
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'center',
    height: 55,
    width: 55,
  },
  texts: {
    marginRight: 20,
    alignSelf: 'center',
  },

  scrollContent: {
    paddingTop: 20,
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },

  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
  },




  //boooookiiinnggg 

  feedsectionContainer: {
    marginBottom: 1000,
  },



  sectionContainer: {
    marginBottom: 20,

  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  chartContainer: {
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10, // Add some vertical spacing
    width: '100%', // Make sure the container takes the full width
  },


  bookingsInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between', // Distribute space between elements to avoid overflow
    alignItems: 'center',

    backgroundColor: "#D1E3F6",
    paddingVertical: 20,

    borderRadius: 8, // Optional for a rounded appearance
  },

  completedTasks: {
    alignItems: 'center',
    padding: 2,
  },

  taskCount: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: "#FBCE50",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    color: "#fff",
    textAlign: 'center',

  },

  taskCounts: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },










  //earningggggs

  Infocontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  card: {
    backgroundColor: '#F1F1F1',
    borderRadius: 15,
    padding: 15,
    marginBottom: 16,
    alignItems: 'center',
    width: 200

  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: "#AF52DE",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10

  },
  labelText: {
    fontSize: 16,
    color: '#555',
  },
  earningsContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,

  },
  earningsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  totalText: {
    fontSize: 18,
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 4,
  },
  chartStyle: {
    marginTop: 10,
    borderRadius: 8,

  },


  //feedback


  feedbackContainer: {
    flexDirection: "column",

  },


  feedbackBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#808083",
    borderRadius: 10
  },

  feedbackRatings: {
    padding: 10,
    backgroundColor: "#F1F1F1",
    marginTop: 10

  },

  feedbackprofile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  user: {
    flexDirection: "row",
    alignItems: "center"
  },

  profileIcon: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  profileInitial: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  feedbackname: {
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center', // This line won't affect vertical centering directly
    justifyContent: 'center',
  },

  reviewContainer: {
    flexDirection: 'row', // To align the star and the text horizontally
    alignItems: 'center', // Center items vertically within the container
  },

  reviewDate: {
    fontSize: 14, // Adjust this size as needed
    color: '#000', // Default color for the text
  },

  star: {
    fontSize: 18, // Adjust the size of the star as needed
    color: '#FFD700'
  },
  comment: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },

  ratingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: "center"
  },
  starIcon: {
    fontSize: 24,
    color: '#FFCC00',
    marginRight: 5,
  },
  ratingValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starLabel: {
    width: 60,
    fontSize: 14,
    color: '#333',
  },
  ratingBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  ratingBarFill: {
    height: 8,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  percentageText: {
    width: 50,
    fontSize: 12,
    color: '#333',
    textAlign: 'right',
  },









});

export default Home;
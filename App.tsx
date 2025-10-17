import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 160 }} 
      >

/* ========== HEADER ========== */
        <View style={styles.header}>
          <Image source={require('./assets/images/labuanbajo.jpg')} style={styles.headerImage} />

      // TOMBOL PANAH
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.arrow}>←</Text>
          </TouchableOpacity>

      // SUHU
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperature}>☀ 24°C</Text>
          </View>

      // RATING
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ 5.0</Text>
          </View>

      // NAMA LOKASI
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Labuan Bajo</Text>
            <Text style={styles.subtitle}>
              From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! Explore hidden islands,
              swim with manta rays, and create memories that last a lifetime.
            </Text>
          </View>
        </View>

        // INFORMASI
        <View style={styles.infoSection}>
          <View style={styles.countryRow}>
            <Text style={styles.flag}>🇮🇩</Text>
            <Text style={styles.country}>Indonesia</Text>
          </View>

          <Text style={styles.infoTitle}>Discover the Beauty of Labuan Bajo</Text>

        // REVIEW
          <View style={styles.reviewCard}>
            <Image source={require('./assets/images/user.jpg')} style={styles.profilePic} />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewer}>Salwa Aprilia Santi</Text>
              <Text style={styles.reviewText}>
                Wow amazing yahh, best experience in my life very very worth it! I like it! Very good very well.
              </Text>
            </View>
          </View>

          <View style={styles.reviewCard}>
            <Image source={require('./assets/images/user2.jpg')} style={styles.profilePic} />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewer}>Kendall Jenner</Text>
              <Text style={styles.reviewText}>
                Absolutely stunning! The ocean was crystal clear and the sunset cruise was magical. Can't wait to return!
              </Text>
            </View>
          </View>

          {showAllReviews && (
            <View style={styles.reviewCard}>
              <Image source={require('./assets/images/user3.jpg')} style={styles.profilePic} />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewer}>Hailey Bieber</Text>
                <Text style={styles.reviewText}>
                  Such a peaceful escape! Loved the vibe, the people, and the scenery. Labuan Bajo feels like heaven.
                </Text>
              </View>
            </View>
          )}

          {showAllReviews && (
            <View style={styles.reviewCard}>
              <Image source={require('./assets/images/user4.jpg')} style={styles.profilePic} />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewer}>Olivia Rodrigo</Text>
                <Text style={styles.reviewText}>
                  Incredible experience! Loved every moment from snorkeling to island hopping. Highly recommend!
                </Text>
              </View>
            </View>
          )}

          {showAllReviews && (
            <View style={styles.reviewCard}>
              <Image source={require('./assets/images/user5.jpg')} style={styles.profilePic} />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewer}>Gigi Hadid</Text>
                <Text style={styles.reviewText}>
                  Labuan Bajo is paradise on earth! The scenery, the people, everything was perfect. Will come back for sure!
                </Text>
              </View>
            </View>
          )}

        // VIEW ALL BUTTON
          <TouchableOpacity style={styles.viewAllButton} onPress={() => setShowAllReviews(!showAllReviews)}>
            <Text style={styles.viewAllText}>{showAllReviews ? "Hide Reviews" : "View All"}</Text>
          </TouchableOpacity>
        </View>

       // REKOMENDASI 
        <View style={styles.recommendSection}>
          <Text style={styles.recommendTitle}>Recommendation in Bajo</Text>

          <View style={styles.recommendCard}>
            <Image source={require('./assets/images/luxury.jpg')} style={styles.recommendImage} />
            <View style={styles.recommendInfo}>
              <Text style={styles.recommendName}>Phinisi Luxury Private Trip</Text>
              <Text style={styles.recommendDesc}>Complimentary pick-up from Labuan Bajo Airport.</Text>
            </View>
          </View>

          <View style={styles.recommendCard}>
            <Image source={require('./assets/images/hotel.jpg')} style={styles.recommendImage} />
            <View style={styles.recommendInfo}>
              <Text style={styles.recommendName}>Local Collection Hotel</Text>
              <Text style={styles.recommendDesc}>5-star seaside hotel with private beach and infinity pool.</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    // FOOTER
      <View style={styles.footerContainer}>
        <View style={styles.footerBackground}>
          <View style={styles.topRow}>
            <View style={styles.counter}>
              <TouchableOpacity style={styles.circleBtn} onPress={decrement}>
                <Text style={styles.btnText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>{quantity}</Text>

              <TouchableOpacity style={styles.circleBtn} onPress={increment}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.priceBox}>
              <Text style={styles.priceLabel}>Total Amount</Text>
              <Text style={styles.priceValue}>${(quantity * 10000).toLocaleString()}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.bookBtn}>
            <Text style={styles.bookText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

/* ========== STYLE ========== */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F2E9' },

  // HEADER
  header: { position: 'relative' },
  headerImage: { width: '100%', height: 340 },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: { fontSize: 28, color: '#fff' },

  // SUHU 
  temperatureContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  temperature: { color: '#fff', fontWeight: '600', fontSize: 18 },

  // RATING
  ratingContainer: {
    position: 'absolute',
    bottom: 130,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  rating: { color: '#fff', fontSize: 18, fontWeight: '600' },

  headerTextContainer: { position: 'absolute', bottom: 20, left: 20, right: 20 },
  title: { fontSize: 34, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  subtitle: { color: '#fff', fontSize: 14, lineHeight: 20 },

  // INFORMASI
  infoSection: { padding: 20 },
  countryRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  flag: { fontSize: 18, marginRight: 6 },
  country: { fontSize: 16, color: '#000' },
  infoTitle: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 10 },

  // REVIEW
  reviewCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  profilePic: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  reviewContent: { flex: 1 },
  reviewer: { fontWeight: 'bold', marginBottom: 5 },
  reviewText: { fontSize: 14, color: '#333' },
  viewAllButton: {
    alignSelf: 'center',
    backgroundColor: '#F6F2E9',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#D3CFC7',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  viewAllText: { color: '#000', fontWeight: 'bold', fontSize: 15 },

  // REKOMENDASI
  recommendSection: { paddingHorizontal: 20, marginTop: 10 },
  recommendTitle: { fontSize: 17, fontWeight: 'bold', color: '#000', marginBottom: 12 },
  recommendCard: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  recommendImage: { width: 110, height: 90 },
  recommendInfo: { flex: 1, padding: 10, justifyContent: 'center' },
  recommendName: { color: '#fff', fontWeight: 'bold' },
  recommendDesc: { color: '#fff', fontSize: 12, marginTop: 3 },

  // FOOTER
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerBackground: {
    backgroundColor: "rgba(0,0,0,0.85)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  counter: { flexDirection: "row", alignItems: "center" },
  circleBtn: {
    backgroundColor: "#ff7043",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  quantity: { color: "#fff", fontSize: 18, marginHorizontal: 10 },
  priceBox: { alignItems: "flex-end" },
  priceLabel: { color: "#fff", fontSize: 14, opacity: 0.8 },
  priceValue: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  bookBtn: {
    backgroundColor: "#ff7043",
    borderRadius: 40,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  bookText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
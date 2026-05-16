import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function GalleryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Our Gallery</Text>

      {/* Row 1 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
          <Text style={styles.label}>Sample 1</Text>
        </View>

        <View style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/201' }} style={styles.image} />
          <Text style={styles.label}>Sample 2</Text>
        </View>
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/202' }} style={styles.image} />
          <Text style={styles.label}>Sample 3</Text>
        </View>

        <View style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/203' }} style={styles.image} />
          <Text style={styles.label}>Sample 4</Text>
        </View>
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/204' }} style={styles.image} />
          <Text style={styles.label}>Sample 5</Text>
        </View>

        <View style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/205' }} style={styles.image} />
          <Text style={styles.label}>Sample 6</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 30,
  },
  headerTitle: {
    fontFamily: 'Inter', // Using your Google Font
    fontSize: 28,
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: '48%', // This makes two items fit side-by-side
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    paddingBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  label: {
    fontFamily: 'AppBold',
    marginTop: 8,
    fontSize: 14,
  },
});
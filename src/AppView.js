import { Text, View, StyleSheet } from 'react-native';

export default function AppView() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Wellcome Hg Q.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
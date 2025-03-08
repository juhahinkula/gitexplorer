import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GitExplorer from './GitExplorer';

export default function App() {
  return (
    <View style={styles.container}>
      <GitExplorer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleComponent = ({ teamAScore, teamBScore }) => {
  let winnerMessage = '';

  if (teamAScore === 10) {
    winnerMessage = 'Team A Wins!';
  } else if (teamBScore === 10) {
    winnerMessage = 'Team B Wins!';
  }

  return (
    <View style={styles.container}>
      {winnerMessage ? <Text style={styles.winnerText}>{winnerMessage}"Team kamu menang</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default ExampleComponent;
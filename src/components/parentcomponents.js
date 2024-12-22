import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ParentComponent = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') {
      setTeamAScore((prev) => Math.min(prev + 1, 10));
    } else {
      setTeamBScore((prev) => Math.min(prev + 1, 10));
    }
  };

  const decrementScore = (team) => {
    if (team === 'A') {
      setTeamAScore((prev) => Math.max(prev - 1, 0));
    } else {
      setTeamBScore((prev) => Math.max(prev - 1, 0));
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  const getWinnerMessage = () => {
    if (teamAScore === 10) {
      return 'Team A Wins! Team kamu menang';
    } else if (teamBScore === 10) {
      return 'Team B Wins! Team kamu menang';
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{teamAScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('A')} />
          <Button title="-" onPress={() => decrementScore('A')} />
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{teamBScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('B')} />
          <Button title="-" onPress={() => decrementScore('B')} />
        </View>
      </View>

      <Button title="Reset Scores" onPress={resetScores} />

      <Text style={styles.winnerMessage}>{getWinnerMessage()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    teamContainer: {
      marginVertical: 20,
      alignItems: 'center',
      flex: 1,
    },
    teamName: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    score: {
      fontSize: 48,
      marginVertical: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
    },
    winnerMessage: {
      marginTop: 20,
      fontSize: 32,
      fontWeight: 'bold',
      color: 'green',
      textAlign: 'center',
    },
  });
  
  export default ParentComponent;
  
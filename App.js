import React, { useState } from 'react';
import { View } from 'react-native';
import ParentComponent from './src/components/parentcomponents';
import ExampleComponent from './src/screens/examplecomponents';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <ParentComponent setTeamAScore={setTeamAScore} setTeamBScore={setTeamBScore} />
      <ExampleComponent teamAScore={teamAScore} teamBScore={teamBScore} />
    </View>
  );
};

export default App;

// Home.js

import React from 'react';
import {View, Text, Button} from 'react-native';

const WorkOrder = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>
        Welcome to the WorkOrder;
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate ('Home')}
      />
    </View>
  );
};

export default WorkOrder;
;

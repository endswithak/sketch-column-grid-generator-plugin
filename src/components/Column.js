import React from 'react';
import { View } from 'react-sketchapp';

const Column = ({ width, height, marginLeft, marginRight, name, backgroundColor }) => (
  <View name={name}
        style={{height, width, marginLeft, marginRight, backgroundColor}}>
  </View>
);

export default Column;

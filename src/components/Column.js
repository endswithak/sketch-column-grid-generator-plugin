import React from 'react';
import { View } from 'react-sketchapp';
import PropTypes from 'prop-types';

const Column = ({ width, height, marginLeft, marginRight, name, backgroundColor }) => (
  <View name={name}
        style={{height, width, marginLeft, marginRight, backgroundColor}}>
  </View>
);

Column.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  name: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Column;

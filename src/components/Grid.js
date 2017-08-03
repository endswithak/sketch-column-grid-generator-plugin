import React from 'react';
import { Artboard, View } from 'react-sketchapp';
import PropTypes from 'prop-types';
import Column from './Column';

const Grid = ({ width, height, columnCount, columns }) => (
  <Artboard name={`${columnCount} column grid`}
            style={{flexDirection: 'row', flexWrap: 'wrap', width, height}}>
    <View name="columns"
          style={{flexDirection: 'row', flexWrap: 'wrap', width, height}}>
      {
        columns.map(column =>
          <Column width={column.width}
                  height={column.height}
                  name={column.name}
                  key={column.key}
                  marginLeft={column.marginLeft}
                  marginRight={column.marginRight}
                  backgroundColor={column.backgroundColor} />
        )
      }
    </View>
  </Artboard>
);

Grid.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  columnCount: PropTypes.number,
  columns: PropTypes.arrayOf(PropTypes.object)
};

export default Grid;

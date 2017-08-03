const generateColumns = (columnWidth, columnCount, columnBackgroundColor, columnHeight, gutterWidth, marginWidth) => {
  let columns = [];
  for (var i = 0; i < columnCount; i++) {
    var column = {
      name: `column ${i+1}`,
      height: columnHeight,
      width: columnWidth,
      marginLeft: gutterWidth/2,
      marginRight: gutterWidth/2,
      backgroundColor: columnBackgroundColor,
      key: i
    }
    if (i === 0) {
      column.marginLeft = marginWidth;
    } else if (i === columnCount - 1) {
      column.marginRight = marginWidth;
    }
    columns.push(column);
  }
  return columns;
}

const calculateColumnwidth = (maxWidth, columnCount, gutterWidth, marginWidth) => {
  return Math.floor((maxWidth - ((columnCount - 1) * gutterWidth + 2 * marginWidth)) / columnCount);
}

const calculatePagewidth = (columnWidth, columnCount, gutterWidth, marginWidth) => {
  return columnWidth * columnCount + (columnCount - 1) * gutterWidth + 2 * marginWidth;
}

export default {
  generateColumns,
  calculateColumnwidth,
  calculatePagewidth
}

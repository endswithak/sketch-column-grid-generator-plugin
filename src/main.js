import React from 'react';
import { render } from 'react-sketchapp';

import {
  generateColumns,
  calculateColumnwidth,
  calculatePagewidth
} from './utils';

import {
  PAGE_MAX_WIDTH,
  PAGE_HEIGHT,
  PAGE_MARGIN_WIDTH,
  COLUMN_BACKGROUND_COLOR,
  COLUMN_COUNT,
  COLUMN_GUTTER_WIDTH,
} from './config';

import Grid from './components/Grid';

const COLUMN_WIDTH = calculateColumnwidth(PAGE_MAX_WIDTH, COLUMN_COUNT, COLUMN_GUTTER_WIDTH, PAGE_MARGIN_WIDTH);
const PAGE_WIDTH = calculatePagewidth(COLUMN_WIDTH, COLUMN_COUNT, COLUMN_GUTTER_WIDTH, PAGE_MARGIN_WIDTH);
const COLUMNS = generateColumns(COLUMN_WIDTH, COLUMN_COUNT, COLUMN_BACKGROUND_COLOR, PAGE_HEIGHT, COLUMN_GUTTER_WIDTH, PAGE_MARGIN_WIDTH);

export default (context) => {
  render(<Grid width={PAGE_WIDTH} height={PAGE_HEIGHT} columnCount={COLUMN_COUNT} columns={COLUMNS} />, context.document.currentPage());
}

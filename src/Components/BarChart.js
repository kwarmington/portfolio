import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import PropTypes from 'prop-types';

export default class BarChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField={this.props.yAxisName}
            argumentField={this.props.xAxisName}
          />
          <Title text={this.props.title} />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.array),
  title: PropTypes.string,
  xAxisName: PropTypes.string,
  yAxisName: PropTypes.string
};
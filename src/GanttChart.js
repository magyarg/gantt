import React, { Component } from 'react';

class GanttChart extends Component {
  constructor(props) {
    super(props);
    this.renderChart();
  }

  renderChart() {
    const { tasks, taskTypes, taskStatus, tickFormat } = this.props;
    const gantt = window.d3
      .gantt((event) => console.log(event))
      .taskTypes(taskTypes)
      .taskStatus(taskStatus)
      .tickFormat(tickFormat);
    gantt(tasks);
  }

  render() {
    return null;
  }
}

export default GanttChart;

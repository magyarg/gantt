import React from 'react';
import ReactDOM from 'react-dom';
import GanttChart from './GanttChart';
import './GanttChart.css';

const tasks = [
  {
    startDate: new Date('Sun Dec 09 01:36:45 EST 2012'),
    endDate: new Date('Sun Dec 09 12:36:45 EST 2012'),
    taskName: 'Alapozás',
    status: 'RUNNING',
  },
  {
    startDate: new Date('Sun Dec 09 04:56:32 EST 2012'),
    endDate: new Date('Sun Dec 09 06:35:47 EST 2012'),
    taskName: 'Falazás',
    status: 'KILLED',
  },
];

const taskStatus = {
  SUCCEEDED: 'bar',
  FAILED: 'bar-failed',
  RUNNING: 'bar-running',
  KILLED: 'bar-killed',
};

const taskNames = ['Alapozás', 'Falazás'];

ReactDOM.render(
  <React.StrictMode>
    <GanttChart tasks={tasks} tickFormat={'%H:%M'} taskTypes={taskNames} taskStatus={taskStatus} />
  </React.StrictMode>,
  document.getElementById('root')
);

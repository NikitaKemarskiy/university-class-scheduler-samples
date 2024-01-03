import React, { useState } from 'react';
import {
  AssignedScheduleCell,
  Schedule,
  ScheduleCellFilter,
  SchedulerParams
} from '@nikitakemarskiy/university-class-scheduler';
import ScheduleCell from './ScheduleCell';

type ScheduleTwoWeeksProps = {
  schedule: Schedule;
  schedulerParams: SchedulerParams;
};

const ScheduleTwoWeeksTable: React.FC<ScheduleTwoWeeksProps> = ({ schedule, schedulerParams }) => {
  const [filter, setFilter] = useState<ScheduleCellFilter>({});

  const handleFilterChange = (filterKey: string, value: number | boolean | null) => {
    setFilter({
      ...filter,
      [filterKey]: value,
    })
  };

  const filteredAssignedScheduleCells = schedule.getAssignedScheduleCells(filter);

  // Initialize a 2D array to represent the fixed table structure
  const cellsScheduleTable: AssignedScheduleCell[][][][] = [];

  // Populate the scheduleTable with the corresponding schedule cells
  for (let week = 0; week < 2; week++) {
    cellsScheduleTable[week] = [];
    for (let day = 0; day < 7; day++) {
      cellsScheduleTable[week][day] = [];
      for (let classNumber = 1; classNumber <= 7; classNumber++) {
        const matchingCells = filteredAssignedScheduleCells.filter(
          (cell) =>
            cell.scheduleCell.weekNumber === week &&
            cell.scheduleCell.workingDay === day &&
            cell.scheduleCell.classNumber === classNumber
        );

        cellsScheduleTable[week][day][classNumber - 1] = matchingCells;
      }
    }
  }

  return (
    <div>
      <h2>Schedule</h2>
      <div>
        <label>
          Lecturer ID:
          <input
            type="number"
            min={1}
            value={filter.lecturerId || ''}
            onChange={(e) => handleFilterChange(
              'lecturerId',
              !e.target.value
                ? null
                : parseInt(e.target.value)
            )}
          />
        </label>
      </div>
      <div>
        <label>
          Group ID:
          <input
            type="number"
            min={1}
            value={filter.groupId || ''}
            onChange={(e) => handleFilterChange(
              'groupId',
              !e.target.value
                ? null
                : parseInt(e.target.value)
            )}
          />
        </label>
      </div>
      <div>
        <label>
          Room ID:
          <input
            type="number"
            min={1}
            value={filter.roomId || ''}
            onChange={(e) => handleFilterChange(
              'roomId',
              !e.target.value
                ? null
                : parseInt(e.target.value)
            )}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th key={1}>Понеділок</th>
            <th key={2}>Вівторок</th>
            <th key={3}>Середа</th>
            <th key={4}>Четвер</th>
            <th key={5}>Пʼятниця</th>
            <th key={6}>Субота</th>
            <th key={7}>Неділя</th>
          </tr>
        </thead>
        <tbody>
          {cellsScheduleTable.map((week, weekIndex) => (
            <tr key={weekIndex}>
              <th>Week {weekIndex + 1}</th>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>
                  {day.map((cells, classIndex) => (
                    <div key={classIndex}>
                      {cells.map((cell) => <ScheduleCell cell={cell} schedulerParams={schedulerParams} />)}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTwoWeeksTable;

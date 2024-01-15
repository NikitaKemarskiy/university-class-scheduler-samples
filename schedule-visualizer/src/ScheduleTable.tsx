import React, { useState } from 'react';
import {
  Schedule,
  ScheduleCellFilter,
  AssignedScheduleCell,
  SchedulerParams
} from '@nikitakemarskiy/university-class-scheduler';

type ScheduleTableProps = {
  schedule: Schedule;
  schedulerParams: SchedulerParams,
};

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule, schedulerParams }) => {
  const [filter, setFilter] = useState<ScheduleCellFilter>({});

  const handleFilterChange = (filterKey: string, value: number | boolean | null) => {
    setFilter({
      ...filter,
      [filterKey]: value,
    })
  };

  const getRoomFullName = (roomId: number) => {
    const room = schedulerParams.rooms.find(({ id }) => id === roomId);
    
    return [
      `${room?.name} (${schedulerParams.roomTypes.find(({ id }) => id === room?.typeId)?.name})`,
      `${schedulerParams.buildings.find(({ id }) => id === room?.buildingId)?.address}`
    ].join(', ')
  }

  const filteredAssignedScheduleCells = schedule.getAssignedScheduleCells(filter);

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
            <th>Номер заняття</th>
            <th>Робочий день</th>
            <th>Номер тижня</th>
            <th>Дисципліна</th>
            <th>Викладачі</th>
            <th>Групи</th>
            <th>Аудиторія</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssignedScheduleCells.map((cell: AssignedScheduleCell, index: number) => (
            <tr key={index}>
              <td>{cell.scheduleCell.classNumber}</td>
              <td>{cell.scheduleCell.workingDay}</td>
              <td>{cell.scheduleCell.weekNumber}</td>
              <td>{schedulerParams.disciplineClasses.find(({ id }) => id === cell.disciplineClassId)?.shortName}</td>
              <td>{
                schedulerParams.lecturers
                  .filter(({ id }) => cell.lecturerIds.includes(id))
                  .map(({ name }) => name)
                  .join(', ')
              }</td>
              <td>{
                schedulerParams.groups
                  .filter(({ id }) => cell.groupIds.includes(id))
                  .map(({ name }) => name)
                  .join(', ')
              }</td>
              <td>{
                !cell.online
                  ? getRoomFullName(cell.roomId)
                  : 'Онлайн-конференція'
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

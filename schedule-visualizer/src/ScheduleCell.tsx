import React from 'react';
import { AssignedScheduleCell, SchedulerParams } from '@nikitakemarskiy/university-class-scheduler';

type ScheduleCellProps = {
  cell: AssignedScheduleCell;
  schedulerParams: SchedulerParams;
};

const ScheduleCell: React.FC<ScheduleCellProps> = ({ cell, schedulerParams }) => {
  const getRoomFullName = (roomId: number) => {
    const room = schedulerParams.rooms.find(({ id }) => id === roomId);
    
    return [
      `${room?.name} (${schedulerParams.roomTypes.find(({ id }) => id === room?.typeId)?.name})`,
      `${schedulerParams.buildings.find(({ id }) => id === room?.buildingId)?.address} корпус`
    ].join(', ')
  }

  const disciplineClassShortName = schedulerParams.disciplineClasses
    .find(({ id }) => id === cell.disciplineClassId)?.shortName;
  const lecturerNames = schedulerParams.lecturers
    .filter(({ id }) => cell.lecturerIds.includes(id))
    .map(({ name }) => name)
    .join(', ')
  const groupNames = schedulerParams.groups
    .filter(({ id }) => cell.groupIds.includes(id))
    .map(({ name }) => name)
    .join(', ');
  const roomName = !cell.online
    ? getRoomFullName(cell.roomId)
    : 'Онлайн-конференція'

  return (
    <div className='schedule-cell'>
      <b>Заняття {cell.scheduleCell.classNumber}</b><br />
      &bull; {disciplineClassShortName}<br />
      &bull; {lecturerNames}<br />
      &bull; {groupNames}<br />
      &bull; {roomName}
    </div>
  );
};

export default ScheduleCell;

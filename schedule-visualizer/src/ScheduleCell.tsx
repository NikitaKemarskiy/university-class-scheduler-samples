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
      `${schedulerParams.buildings.find(({ id }) => id === room?.buildingId)?.address}`
    ].join(', ')
  }

  const disciplineClass = schedulerParams.disciplineClasses
    .find(({ id }) => id === cell.disciplineClassId);
  const disciplineClassType = schedulerParams.disciplineClassTypes
    .find(({ id }) => id === disciplineClass?.typeId);
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
      &bull; {disciplineClass?.shortName}, {disciplineClassType?.shortName}<br />
      &bull; {lecturerNames}<br />
      &bull; {groupNames}<br />
      &bull; {roomName}
    </div>
  );
};

export default ScheduleCell;

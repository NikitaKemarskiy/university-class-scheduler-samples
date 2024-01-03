import { Schedule, ScheduleCellFilter, SchedulerParams } from '@nikitakemarskiy/university-class-scheduler';

export class ScheduleVisualizer {
  constructor(
    private readonly params: SchedulerParams,
    private readonly schedule: Schedule
  ) {}

  visualizeSchedule(filter: ScheduleCellFilter) {
    if (
      !filter.lecturerId
      && !filter.groupId
      && !filter.roomId
    ) {
      throw new Error('Can not visualize schedule without filtration either by lecturer, group or room');
    }

    const assignedScheduleCells = this.schedule.getAssignedScheduleCells(filter);
  }
}

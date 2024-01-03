import { DayOfWeek, ScheduleOptions } from '@nikitakemarskiy/university-class-scheduler';

export const scheduleOptions: ScheduleOptions = {
  weeksPerCycle: 2,
  workingDays: [
    DayOfWeek.MONDAY,
    DayOfWeek.TUESDAY,
    DayOfWeek.WEDNESDAY,
    DayOfWeek.THURSDAY,
    DayOfWeek.FRIDAY,
  ],
  lastClassNumber: 7,
};

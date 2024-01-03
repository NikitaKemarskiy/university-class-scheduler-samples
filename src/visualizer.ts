import * as fs from 'fs';
import * as path from 'path';
import { ScheduleVisualizer } from './schedule-visualizer';
import { Schedule, SchedulerParams } from '@nikitakemarskiy/university-class-scheduler';
import { GeneticAlgorithmParams } from '@nikitakemarskiy/university-class-scheduler/schedulers/genetic-algorithm';

const resultFileName = process.argv[2];

if (!resultFileName) {
  throw new Error('No result file name CLI argument specified');
}

const result: {
  params: SchedulerParams,
  geneticAlgorithmParams: GeneticAlgorithmParams,
  scheduleSerializedToJSON: string,
} = JSON.parse(fs.readFileSync(path.join(__dirname, `../results/${resultFileName}`), 'utf-8'));

const schedule = Schedule.deserializeFromJSON(result.scheduleSerializedToJSON);
const scheduleVisualizer = new ScheduleVisualizer(result.params, schedule);

console.dir({
  params: result.params,
  geneticAlgorithmParams: result.geneticAlgorithmParams,
  schedule: schedule,
  lecturerScheduleCells_Id2: schedule.getAssignedScheduleCells({ lecturerId: 2 }),
  groupScheduleCells_Id4: schedule.getAssignedScheduleCells({ groupId: 4 }),
  groupScheduleCells_Id5: schedule.getAssignedScheduleCells({ groupId: 5 }),
  lecturerGroupScheduleCells_Id2_Id4: schedule.getAssignedScheduleCells({ lecturerId: 2, groupId: 4 }),
}, { depth: 4 });

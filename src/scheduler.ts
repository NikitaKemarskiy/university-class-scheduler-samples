import * as fs from 'fs';
import * as path from 'path';
import { DisciplineClass, Schedule } from '@nikitakemarskiy/university-class-scheduler';
import {
  GeneticAlgorithmScheduler,
  DisciplineClassAssigned
} from '@nikitakemarskiy/university-class-scheduler/schedulers/genetic-algorithm';

// Dataset
import { scheduleOptions } from './data/core';
import { groups, groupTypes } from './data/group';
import { buildings, faculties, facultyDepartments, rooms, roomTypes } from './data/institution';
import { disciplineClassTypes, disciplineClasses, lecturers } from './data/discipline';

// disciplineClassesAssigned dataset is used to implement the second subtask solution first, because it's more important
// and it has ready-to-use genetic algorithm tips.
// TODO: Implement another method to calculate disciplineClassAssigned: DisciplineClassAssigned[] array
// (i.e. to solve the first subtask).
import { disciplineClassesAssignedPartial } from './data/disciplineClassAssignedPartial';

const disciplineClassesAssigned: Array<DisciplineClassAssigned> = disciplineClassesAssignedPartial.map((disciplineClassAssigned) => {
  const discipline: DisciplineClass = disciplineClasses.find(
    (disciplineClass) => disciplineClass.id === disciplineClassAssigned.disciplineClassId
  )!;
  
  return {
    disciplineClassId: disciplineClassAssigned.disciplineClassId,
    lecturerIds: disciplineClassAssigned.lecturerIds,
    groupIds: disciplineClassAssigned.groupIds,
    assignedScheduleCellsPerCycle: discipline.assignedScheduleCellsPerWeek * scheduleOptions.weeksPerCycle,
    facultyId: discipline.facultyId,
    facultyDepartmentId: discipline.facultyDepartmentId,
    ...(
      !discipline.online
        ? {
          online: false,
          appropriateRoomTypeIds: discipline.appropriateRoomTypeIds
        }
        : {
          online: true,
        }
    )
  };
});

const schedulerParams = {
  // Meta
  options: scheduleOptions,
  // Groups
  groups,
  groupTypes,
  // Institutions
  buildings,
  faculties,
  facultyDepartments,
  rooms,
  roomTypes,
  // Disciplines & lecturers
  disciplineClassTypes,
  disciplineClasses,
  lecturers,
  disciplineClassesAssigned,
};

const geneticAlgorithmParams = {
  populationSize: 50,
  eliteIndividualsCount: 20,
  crossoverIndividualsFraction: 0.8,
  geneMutationProbability: 0.25,
  maxIterations: 100,
};

const scheduler = new GeneticAlgorithmScheduler(schedulerParams, geneticAlgorithmParams);

const startTimestamp = Date.now();
const schedule: Schedule = scheduler.generateSchedule();
const endTimestamp = Date.now();

const resultFilePath = path.join(__dirname, `../results/${Date.now()}-result.json`);
fs.writeFileSync(resultFilePath, JSON.stringify({
  schedulerParams,
  geneticAlgorithmParams,
  scheduleSerializedToJSON: schedule.serializeToJSON(),
}));

console.log(`Algorithm finished in ~${((endTimestamp - startTimestamp) / 1e3).toFixed(2)} seconds. Result was saved to ${resultFilePath}`);

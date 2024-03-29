import {
  DayOfWeek,
  DisciplineClass,
  DisciplineClassType,
  Lecturer,
} from '@nikitakemarskiy/university-class-scheduler';

export const disciplineClassTypes: Array<DisciplineClassType> = [
  {
    id: 1,
    shortName: "Лек",
    fullName: "Лекційне заняття"
  },
  {
    id: 2,
    shortName: "Прак",
    fullName: "Практичне заняття"
  },
  {
    id: 3,
    shortName: "Лаб",
    fullName: "Лабораторне заняття"
  }
];

export const disciplineClasses: Array<DisciplineClass> = [
  {
    id: 1,
    shortName: "Мат. анал. 1",
    fullName: "Математичний аналіз. Частина 1. Диференціальне числення",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 4,
    facultyId: 1,
    online: false,
  },
  {
    id: 2,
    shortName: "Мат. анал. 1",
    fullName: "Математичний аналіз. Частина 1. Диференціальне числення",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 3,
    shortName: "Лін. алг. та анал. геом.",
    fullName: "Лінійна алгебра та аналітична геометрія",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 4,
    facultyId: 1,
    online: false,
  },
  {
    id: 4,
    shortName: "Лін. алг. та анал. геом.",
    fullName: "Лінійна алгебра та аналітична геометрія",
    typeId: 2,
    assignedScheduleCellsPerWeek: 0.5,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 5,
    shortName: "Алг. та структ. даних 1",
    fullName: "Алгоритми та структури даних. Частина 1. Основи алгоритмізації",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [1],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 1,
    online: false,
  },
  {
    id: 6,
    shortName: "Алг. та структ. даних 1",
    fullName: "Алгоритми та структури даних. Частина 1. Основи алгоритмізації",
    typeId: 3,
    assignedScheduleCellsPerWeek: 0.5,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 7,
    shortName: "Осн. здор.",
    fullName: "Основи здорового способу життя",
    typeId: 1,
    assignedScheduleCellsPerWeek: 0.5,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 5,
    online: false,
  },
  {
    id: 8,
    shortName: "Осн. здор.",
    fullName: "Основи здорового способу життя",
    typeId: 2,
    assignedScheduleCellsPerWeek: 0.5,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    online: false,
  },
  {
    id: 9,
    shortName: "Осн. прог. 1",
    fullName: "Основи програмування. Частина 1. Базові конструкції",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [1],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 1,
    online: false,
  },
  {
    id: 10,
    shortName: "Осн. прог. 1",
    fullName: "Основи програмування. Частина 1. Базові конструкції",
    typeId: 2,
    assignedScheduleCellsPerWeek: 0.5,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 11,
    shortName: "Осн. прог. 1",
    fullName: "Основи програмування. Частина 1. Базові конструкції",
    typeId: 3,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [4],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 12,
    shortName: "Комп. дискр. мат.",
    fullName: "Комп'ютерна дискретна математика",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [1],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 1,
    online: false,
  },
  {
    id: 13,
    shortName: "Комп. дискр. мат.",
    fullName: "Комп'ютерна дискретна математика",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 14,
    shortName: "Заг. фіз. 1",
    fullName: "Фізика. Частина 1. Загальна фізика І",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 4,
    online: false,
  },
  {
    id: 15,
    shortName: "Заг. фіз. 1",
    fullName: "Фізика. Частина 1. Загальна фізика І",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    online: false,
  },
  {
    id: 16,
    shortName: "Осн. прог. 1",
    fullName: "Програмування. Частина 1. Основи програмування",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [1],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 1,
    online: false,
  },
  {
    id: 17,
    shortName: "Осн. прог. 1",
    fullName: "Програмування. Частина 1. Основи програмування",
    typeId: 3,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [4],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 18,
    shortName: "Опер. сист.",
    fullName: "Операційні системи",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 1,
    online: false,
  },
  {
    id: 19,
    shortName: "Опер. сист.",
    fullName: "Операційні системи",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 20,
    shortName: "Опер. сист.",
    fullName: "Операційні системи",
    typeId: 3,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [4],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 21,
    shortName: "Мереж. тех.",
    fullName: "Мережеві технології",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 1,
    online: false,
  },
  {
    id: 22,
    shortName: "Мереж. тех.",
    fullName: "Мережеві технології",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 23,
    shortName: "Мереж. тех.",
    fullName: "Мережеві технології",
    typeId: 3,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [4],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 1,
    online: false,
  },
  {
    id: 24,
    shortName: "Мат. анал. 1",
    fullName: "Математичний аналіз. Частина 1. Диференціальне числення",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 4,
    facultyId: 2,
    online: false,
  },
  {
    id: 25,
    shortName: "Мат. анал. 1",
    fullName: "Математичний аналіз. Частина 1. Диференціальне числення",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 2,
    online: false,
  },
  {
    id: 26,
    shortName: "Лін. алг. та анал. геом.",
    fullName: "Лінійна алгебра та аналітична геометрія",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 4,
    facultyId: 2,
    online: false,
  },
  {
    id: 27,
    shortName: "Лін. алг. та анал. геом.",
    fullName: "Лінійна алгебра та аналітична геометрія",
    typeId: 2,
    assignedScheduleCellsPerWeek: 0.5,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 2,
    online: false,
  },
  {
    id: 28,
    shortName: "Метод. числ.",
    fullName: "Методи числення",
    typeId: 1,
    assignedScheduleCellsPerWeek: 2,
    appropriateRoomTypeIds: [1],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    facultyId: 2,
    online: false,
  },
  {
    id: 29,
    shortName: "Метод. числ.",
    fullName: "Методи числення",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    facultyId: 2,
    online: false,
  },
  {
    id: 30,
    shortName: "Технології ШІ",
    fullName: "Технології штучного інтелекту",
    typeId: 1,
    assignedScheduleCellsPerWeek: 1.5,
    appropriateRoomTypeIds: [2],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 2,
    online: false,
  },
  {
    id: 31,
    shortName: "Технології ШІ",
    fullName: "Технології штучного інтелекту",
    typeId: 2,
    assignedScheduleCellsPerWeek: 1,
    appropriateRoomTypeIds: [3],
    numberOfLecturersPerRoomRequired: 1,
    maxGroupsPerClass: 1,
    online: false,
  },
  // {
  //   id: 32,
  //   shortName: "ІОС",
  //   fullName: "Інновації освітнього процесу",
  //   typeId: 1,
  //   assignedScheduleCellsPerWeek: 1,
  //   numberOfLecturersPerRoomRequired: 1,
  //   maxGroupsPerClass: 5,
  //   online: true,
  // },
];

export const lecturers: Array<Lecturer> = [
  {
    id: 1,
    name: "доц. Удод С. В.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [3,4,5,6,7],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [1,2,3,4,24,25,26,27]
  },
  {
    id: 2,
    name: "ас. Збоєва О. Є.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [2,4,25,26]
  },
  {
    id: 3,
    name: "доц. Васильєв Н. В.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.THURSDAY]: [3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5,],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [3,4]
  },
  {
    id: 4,
    name: "ст.вик. Ісаєнко А. С.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5,6],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5,6],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [5,6]
  },
  {
    id: 5,
    name: "ст.вик. Романов І. І.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [3,4,5,6,7],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [5,6]
  },
  {
    id: 6,
    name: "доц. Лебедєва Д. М.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [7,8]
  },
  {
    id: 7,
    name: "ст.вик. Бочкарьова О. М.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.THURSDAY]: [3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5,],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [7,8]
  },
  {
    id: 8,
    name: "доц. Ліщенко О. М.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5,6],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5,6],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [9,10,11]
  },
  {
    id: 9,
    name: "пос. Міщук Т. А.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [3,4,5,6,7],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [12,13]
  },
  {
    id: 10,
    name: "доц. Клименко О. С.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [14,15]
  },
  {
    id: 11,
    name: "пос. Кузьменко С. Л.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.THURSDAY]: [3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5,],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [16,17]
  },
  {
    id: 12,
    name: "ст.в. Скляр К. С.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5,6],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5,6],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [18,19,20,21,22,23]
  },
  {
    id: 13,
    name: "ст.в. Коваль Є. П.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [24,25,26,27]
  },
  {
    id: 14,
    name: "доц. Фоміна Т. Є.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.THURSDAY]: [3,4,5],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5,],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [28,29]
  },
  {
    id: 15,
    name: "ст.в. Степанов Р. У.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5,6],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5,6],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [30,31]
  },
  {
    id: 16,
    name: "ст.в. Селіванов М. О.",
    weeklyAvailableScheduleCells: {
      [DayOfWeek.MONDAY]: [1,2,3,4,5,6],
      [DayOfWeek.TUESDAY]: [1,2,3,4,5,6],
      [DayOfWeek.WEDNESDAY]: [1,2,3,4,5,],
      [DayOfWeek.THURSDAY]: [1,2,3,4,5,6],
      [DayOfWeek.FRIDAY]: [1,2,3,4,5],
      [DayOfWeek.SATURDAY]: [],
      [DayOfWeek.SUNDAY]: [],
    },
    disciplineClassIds: [32]
  },
];

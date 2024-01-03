import { useState } from 'react';
import { Schedule, SchedulerParams } from '@nikitakemarskiy/university-class-scheduler';
import './App.css';
import ScheduleTwoWeeks from './ScheduleTwoWeeks';
import ScheduleTable from './ScheduleTable';

function App() {
  const [schedulerParams, setSchedulerParams] = useState<SchedulerParams | null>(null);
  const [schedule, setSchedule] = useState<Schedule | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          if (typeof e.target?.result !== 'string') {
            throw new Error('Can not read file');
          }

          const result: {
            schedulerParams: SchedulerParams,
            scheduleSerializedToJSON: string,
          } = JSON.parse(e.target.result);

          setSchedulerParams(result.schedulerParams);
          
          const parsedSchedule = Schedule.deserializeFromJSON(result.scheduleSerializedToJSON);
          setSchedule(parsedSchedule);
        } catch (err) {
          alert(`Error parsing JSON: ${err}`);
        }
      };
      
      reader.readAsText(file);
    }
  };
  
  return (
    <div className="App">
      <label>
        Choose a valid result .json file:
        <input type="file" accept=".json" onChange={handleFileChange} />
      </label>
      {
        schedule && schedulerParams
          ? (
            <div>
              {/* <ScheduleTable schedule={schedule} schedulerParams={schedulerParams} />
              <hr /> */}
              <ScheduleTwoWeeks schedule={schedule} schedulerParams={schedulerParams} />
            </div>
          )
          : <p>Please choose a valid result .json file first</p>}
    </div>
  );
}

export default App;

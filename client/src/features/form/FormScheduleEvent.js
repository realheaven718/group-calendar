import { useContext } from "react";
import { FormMoverContext } from "./contexts/FormMoverContext";
import FormRecurringDates from "./FormRecurringDates";

// This component contains location, and the start and end time, see the FormRecurringDates sub-component for details regarding the recurring events
export default function FormScheduleEvent() {

  // This useContext hook syncs userData across UserForm and its sub-components
  const { userData, setUserData } = useContext(FormMoverContext);

  // Set the userData when we change a field-value
  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    // LOCATION FIELD
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Location
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={userData["location"] || ""}
            name="location"
            placeholder="Location"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

      {/* START TIME FIELD */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Start Time
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="time"
            onChange={handleChange}
            value={userData["startTime"] || ""}
            name="startTime"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

      {/* END TIME FIELD */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          End Time
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="time"
            onChange={handleChange}
            value={userData["endTime"] || ""}
            name="endTime"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

      {/* You thought this was as deep as this goes, huh? nah. */}
      {/*  */}
      <div>
        <FormRecurringDates />
      </div>
    </div>
  );
}

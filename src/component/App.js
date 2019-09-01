import React from "react";

import SessionList from "./sessions/Sessionlist";
import FilterOptions from "./FilterOptions";
import DaySelectButton from "./DaySelectButton";
import VenueList from "./VenueList";
import TypeList from "./TypeList";


const App = () => {
  return (
    <div>
      <DaySelectButton />
        <VenueList />
        <TypeList />
      <FilterOptions />
      <SessionList />
    </div>
  );
};

export default App;

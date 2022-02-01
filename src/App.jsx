import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import JobBoard from "./components/JobBoard";


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);


  return (
    <div className="bg-teal-100 p-4 xxl:px-48">
      {jobs.length === 0 ? (
        <p>Job Fetching</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id}/>)
      )}
    </div>
  );
}

export default App;

// // TODO'S
// 1. Study The design✔
// 2. Job Board Component✔
// 3. Get Data from JSON✔
// 4. Pass down the data to the JBC✔
// 5. Style it
// 6. Filter it
// 7. Filter the data

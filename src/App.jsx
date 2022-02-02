import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import JobBoard from "./components/JobBoard";
import Img from "./images/bg-header-desktop.svg";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="bg-teal-100">
      <header className="bg-teal-500 mb-12">
        <img src={Img} alt="" />
      </header>
      <div className="p-4 xxl:px-40">
        {jobs.length === 0 ? (
          <p>Job is Fetching...</p>
        ) : (
          jobs.map((job) => <JobBoard job={job} key={job.id} />)
        )}
      </div>
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

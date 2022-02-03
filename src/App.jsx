import React, { useState, useEffect } from "react";
import data from "./data.json";
import JobBoard from "./components/JobBoard";
import Img from "./images/bg-header-desktop.svg";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filtering, setFiltering] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  //Creating the callback function for the filteredJobs
  const filterFunc = ({ role, level, tools, languages }) => {
    if (filtering.length === 0) {
      return true;
    }

    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filtering.includes(tag));
  };

  //Creating a function to filter jobs
  const filteredJobs = jobs.filter(filterFunc);

  //To filter based on what user clicked and display them only
  const handleClickTag = (tag) => {
    if (filtering.includes(tag)) return; // To make the filter tag display if it exist (shows)
    setFiltering([...filtering, tag]);
  };

  //To remove the filtered tags when clicked
  const handleFiterTag = (passedFilter) => {
    setFiltering(filtering.filter((filterOut) => filterOut !== passedFilter));
  };

  const clearSearch = () => {
    setFiltering([]);
  };

  return (
    <div className="bg-teal-100">
      <header className="bg-teal-500 mb-12">
        <img src={Img} alt="" />
      </header>
      {filtering.length > 0 && (
        <div className="z-10 relative -mt-20 lg:mx-48 ">
          <div className="flex items-center justify-between my-4 mx-8 bg-white  shadow-lg rounded p-4">
            <div className="flex flex-wrap my-2 rounded">
              {filtering.map((filter) => (
                <span
                  className="pr-2 mb-3"
                  key={filter.id}
                  onClick={() => handleFiterTag(filter)}
                >
                  <span className="bg-teal-100 text-teal-500 py-1 px-2 cursor-pointer">
                    {filter}
                  </span>
                  <span className="bg-teal-500 text-teal-100 py-1 px-2 rounded cursor-pointer">
                    x
                  </span>
                </span>
              ))}
            </div>
            <div
              onClick={clearSearch}
              className="bg-teal-100 text-teal-500 py-1 px-2 cursor-pointer rounded mx-8"
            >
              Clear
            </div>
          </div>
        </div>
      )}
      <div className="p-4">
        {jobs.length === 0 ? (
          <p>Job is Fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoard job={job} key={job.id} handleClickTag={handleClickTag} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

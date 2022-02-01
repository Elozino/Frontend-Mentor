import React from "react";

function JobBoard({ job }) {
  return (
    <div className="flex m-4 justify-between bg-white shadow-md rounded border-solid border-l-4 border-teal-500">
      <div className="flex m-4 p-4">
        <div>
          <div>
            <img src={job.logo} alt={job.company} />
          </div>
        </div>
        <div className="ml-6">
          <div className="flex items-center">
            <h3 className="font-bold text-lg text-teal-300 mr-4">
              {job.company}
            </h3>
            <h3 className="font-bold text-xs bg-teal-500 rounded-full py-1 px-4 mr-4 text-white">
              NEW
            </h3>
            <h3 className="font-bold text-xs bg-teal-900 rounded-full py-1 px-4 text-white">
              FEATURED
            </h3>
          </div>
          <h2>{job.position}</h2>
          <p>
            {job.postedAt} ▫ {job.contract} ▫ {job.location}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="bg-teal-100 rounded-full text-teal-800 px-4 mr-4">{job.role}</p>
        <p className="bg-teal-100 rounded-full text-teal-800 px-4 mr-4">{job.level}</p>
        {job.tools?.map((item, i) => (
          <p key={i} className="bg-teal-100 rounded-full text-teal-800 px-4 mr-4">{item}</p>
        ))}
        {job.languages?.map((item, i) => (
          <p key={i} className="bg-teal-100 rounded-full text-teal-800 px-4 mr-4">{item}</p>
        ))}
      </div>
    </div>
  );
}

export default JobBoard;

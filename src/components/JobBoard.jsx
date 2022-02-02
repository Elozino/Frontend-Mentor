import React from "react";

function JobBoard({ job }) {
  return (
    <div
      className={`lg:flex m-4 justify-between bg-white shadow-lg rounded 
    ${job.featured && " border-solid border-l-4 border-teal-500"}
   `}
    >
      <div className="lg:flex lg:m-4 p-4">
        <div>
          <div className="-mt-12 lg:-mt-0 w-20 h-20 mb-2 lg:mb-0">
            <img src={job.logo} alt={job.company} />
          </div>
        </div>
        <div className="lg:ml-6">
          <div className="flex items-center">
            <h3 className="font-bold lg:text-lg text-teal-300 mr-4 py-1">
              {job.company}
            </h3>
            {job.new && (
              <h3 className="font-bold text-xs bg-teal-500 rounded-full py-1 px-4 mr-4 text-white">
                NEW
              </h3>
            )}

            {job.featured && (
              <h3 className="font-bold text-xs bg-teal-900 rounded-full py-1 px-4 text-white">
                FEATURED
              </h3>
            )}
          </div>
          <h2 className="text-teal-900 font-medium">{job.position}</h2>
          <p className="text-teal-900 text-opacity-40">
            {job.postedAt} ▫ {job.contract} ▫ {job.location}
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap items-center pt-2 lg:pt-0 pb-4 lg:pb-0 mr-3 ml-4 lg:ml-0 mb-20 lg:mb-0 font-bold text-base
      border-t-2 border-solid lg:border-t-0
      "
      >
        <p className="bg-teal-100 rounded text-teal-500 px-4 py-1 mr-4 my-2">
          {job.role}
        </p>
        <p className="bg-teal-100 rounded text-teal-500 px-4 py-1 mr-4 my-2">
          {job.level}
        </p>
        {job.tools?.map((item, i) => (
          <p
            key={i}
            className="bg-teal-100 rounded text-teal-500 px-4 py-1 mr-4 my-2"
          >
            {item}
          </p>
        ))}
        {job.languages?.map((item, i) => (
          <p
            key={i}
            className="bg-teal-100 rounded text-teal-500 px-4 py-1 mr-4 my-2"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default JobBoard;

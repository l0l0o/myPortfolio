import React, { useEffect } from "react";
import { useState } from "react";

const ProgressBar = ({ time = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className={"w-full bg-gray-300 rounded-full h-0.5"}>
      <div
        className="bg-white h-0.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

"use client";

import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <div className={"w-full bg-gray-300 rounded-full h-0.5"}>
      <div
        className="bg-white h-0.5 rounded-full"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

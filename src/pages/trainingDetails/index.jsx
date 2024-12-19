import React from "react";
import { useParams } from "react-router-dom";

const TrainingDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>TrainingDetails</div>;
};

export default TrainingDetails;

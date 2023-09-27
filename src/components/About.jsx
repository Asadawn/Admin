import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get("http://192.168.137.1:8000/core/user");
      const result = response.data;
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <div>
      <h1 className="text-3xl "> About component </h1>
      <p>{data}</p>
    </div>
  );
};

export default About;

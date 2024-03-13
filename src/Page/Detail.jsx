import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dataInput } from "../Data/Data";

const Detail = () => {
  const { id } = useParams();

  const [singleEmployee, setSingleEmployee] = useState([]);

  useEffect(() => {
    const filterDetails = dataInput.filter((item) => item.id == id);

    setSingleEmployee(filterDetails);
  }, [id]);

  //   console.log(setSingleEmployee);
  return (
    <>
      <div className="container">
        <div className="header">
          <Link style={{ textDecoration: "none" }} to="/">
            <p>
              <i className="fa-solid fa-arrow-left"></i>
            </p>
          </Link>
          <p>Employee details</p>
        </div>
        <div className="detail-container">
          {singleEmployee &&
            singleEmployee.map((item) => {
              const { id, name, age, salary } = item;
              return (
                <div className="box" key={id}>
                  <p>{name}</p>
                  <p>{age}</p>
                  <p>{salary}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Detail;

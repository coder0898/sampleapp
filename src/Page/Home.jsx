import React from "react";
import { Link } from "react-router-dom";

const Home = ({ employeeData }) => {
  return (
    <main>
      <header>
        <p>EmployeeDummy</p>
      </header>
      <ul>
        {employeeData &&
          employeeData.map((emp) => {
            const { id, name, age, salary } = emp;
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/detail/${id}`}
                key={id}
              >
                <li>
                  <p>{name}</p>
                  <p>{age}</p>
                  <p>{salary}</p>
                </li>
              </Link>
            );
          })}
      </ul>
    </main>
  );
};

export default Home;

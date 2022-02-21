import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("emergency");
  const [size, setSize] = useState("large");
  const handleSubmit = (e) => {
    e.preventDefault();
    const aircraft = {
      name: name,
      type: type,
      size: size,
    };

    const setAddAC = async (aircraft) => {
      const result = await axios.post(
        `http://localhost:8888/aircrafts/add`,
        aircraft
      );
      window.location.reload(false);
    };

    setAddAC(aircraft);
  };

  return (
    <div>
      <h1>Add Aircraft Into The System</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Size</th>
              <th scope="col">Submit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <select
                  name="type"
                  id="type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="emergency">Emergency</option>
                  <option value="vip">VIP</option>
                  <option value="passenger">Passenger</option>
                  <option value="cargo">Cargo</option>
                </select>
              </td>
              <td>
                <select
                  name="size"
                  id="size"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="large">Large</option>
                  <option value="small">Small</option>
                </select>
              </td>
              <td>
                <input type="submit" id="fname" name="fname" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Add;

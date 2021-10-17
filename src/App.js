import JSONDATA from "./data.json";
import "./App.css";
import { useState } from "react";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here....."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <h2>Name: {val.name}</h2>
            <p>Email: {val.email}</p>
            <p>Job-title: {val["job-title"]}</p>
            <p>Phone No: {val.Phone}</p>
            <p>DOB: {val["Birth-Date"]}</p>
            <p>Place: {val.Place}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;

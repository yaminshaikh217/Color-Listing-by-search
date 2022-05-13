import React, {  useState } from "react";
import "./App.css";
import data from "./color.json";

const App = () => {
  const [search, setSearch] = useState();


  const showColor = async (e) => {
    e.preventDefault();
  };


  return (
    <>
      <div className="main">
        <h1>Type your color</h1>
        <form onSubmit={showColor}>
          <input placeholder="serach" className="input" onChange={(e) => setSearch(e.target.value)}/>
          <button type="submit" value="Search" className="btn">
            Go
          </button>
        </form>
        
        {data.filter((val) => {
            if (search == "") {
              return null;
            }else if(val.name.toLowerCase().includes(search)){
              return val
            }
          }).map((item, index) => {
            return <div key={index}>
              <div className="card" style={{background : item.hex}}>
              <div>{item.name}</div>
              <div>{item.hex}</div>
              </div>
            </div>;
          })}
      </div>
    </>
  );
};

export default App;

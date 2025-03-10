import Table from "./Table";
import { Data } from "./Data";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="firstname">
          <label>
            First Name :
            <input type="text" className="firstname" />
          </label>
        </div>

        <div className="lastname">
          <label>
            Last Name :
            <input type="text" className="lastname" />
          </label>
        </div>

        <div className="lastname">
          <label>
            Age :
            <input type="text" className="age" />
          </label>
        </div>

        <button type="button" className="btn btn-primary button-margin ">
          save
        </button>
        <button type="button" className="btn btn-danger">
          clear
        </button>
      </div>
      <Table data={Data} />
    </>
  );
};

export default App;

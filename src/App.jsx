import React from "react";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { namez } from "./api";
import { addUser, removeUser } from "./store/slices/userSlice";
import { removeAll } from "./store/actions";
const App = () => {
  const dispatcher = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const addItem = (payload) => {
    //console.log(payload);
    dispatcher(addUser(payload));
  };
  const clearAll = () => {
    dispatcher(removeAll());
  };
  const deleteOne = (id) => {
    dispatcher(removeUser(id));
  };
  return (
    <div>
      <Navbar />
      <h1 className="display-4 text-center my-5">List of Data</h1>
      <div className="container">
        <button
          className="btn btn-primary my-2 position-relative top-50 start-50"
          onClick={() => addItem(namez())}
        >
          Add Item
        </button>
        <ul>
          {data.map((ele, id) => {
            return (
              <li key={id}>
                {ele}{" "}
                <button
                  className="btn btn-dark inline mx-10 my-2"
                  onClick={() => deleteOne(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-danger my-5 position-relative top-50 start-50"
          onClick={() => clearAll()}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default App;

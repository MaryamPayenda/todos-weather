import React, { useState, useEffect } from "react";
import weather from "./components/weather";
import List from "./components/todo/List";
import Alert from "./components/todo/Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [idEditing, setIdEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please Enter a value");
    } else if (name && idEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIdEditing(false);
      showAlert(true, "Value changed");
    } else {
      showAlert(true, "Success", "Item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert(show, type, msg);
  };

  const removeItem = (id) => {
    showAlert(true, "Item Removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIdEditing(true);
    setEditID(id);
    setName(editItem.title);
  };

  const clearList = () => {
    showAlert(true, "Empty List");
    setList([]);
  };

  return (
    <React.Fragment>
      <div className="container">
        <section className="section-center">
          <form onSubmit={handleSubmit}>
            <h3>TODO LIST</h3>
            <div className="form-design">
              <input
                type="text"
                placeholder="ex: Coding"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button type="submit" className="btn">
                {idEditing ? "Edit" : "Search"}
              </button>
            </div>
          </form>
          {list.length > 0 && (
            <div className="app">
              <List items={list} removeItem={removeItem} editItem={editItem} />
              <div>
                <button onClick={clearList} className="clearList">
                  Clear Items
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;

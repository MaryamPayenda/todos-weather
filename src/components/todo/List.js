import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;

        return (
          <ul key={id} className="listDesign">
            <li>
              {title}
              <div className="editAndDelete">
                <button
                  type="button"
                  onClick={() => editItem(id)}
                  className="btn"
                >
                  <FaEdit className="btn-edit" />
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash className="btn-delete" />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default List;

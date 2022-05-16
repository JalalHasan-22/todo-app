import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";

import { SettingContext } from "../../context/Setting";

import "./list.scss";

export default function List(props) {
  const settings = useContext(SettingContext);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(settings.items);

  return (
    <div id="list-container">
      {(settings.sort
        ? props.list.sort((a, b) => a.difficulty - b.difficulty)
        : props.list
      ).map((item, index) => {
        if (start - 1 <= index && index <= end - 1) {
          return (
            <div key={index} className="toDoItem">
              <h3>
                {item.text} {index}
              </h3>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>
              <div onClick={() => props.toggleComplete(item.id)}>
                {/* Complete: {item.complete.toString()} */}
                {item.complete ? (
                  <p className="completed">Completed</p>
                ) : (
                  <p className="pending">Pending</p>
                )}
              </div>
              {/* <hr /> */}
            </div>
          );
        }
      })}

      <div id="buttons-div">
        {start !== 1 && (
          <Button
            variant="secondary"
            onClick={() => {
              setStart(end - (settings.items + settings.items - 1));
              setEnd(end - settings.items);
            }}
          >
            👈 Previous
          </Button>
        )}

        {props.list.length > end && (
          <Button
            variant="secondary"
            onClick={() => {
              setStart(end + 1);
              setEnd(end + settings.items);
            }}
          >
            Next 👉
          </Button>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  EntryActions,
  EntryContainer,
  EntryDate,
  EntryValue,
} from "./EntryElements";
import { IconContext } from "react-icons/lib";
import { MdEdit, MdDelete, MdSave } from "react-icons/md";
import Moment from "moment";

const WeightEntry = (props) => {
  const [inputDisabled, setInputDisabled] = useState(true);
  const [weightValue, setWeightValue] = useState(props.value);
  const date = Moment(props.date).format("HH:mma - DD/MM/YYYY");
  const handleDelete = () => {
    alert("Deleting item");
  };

  const handleEdit = () => {
    setInputDisabled(false);
  };

  const handleSave = () => {
    setInputDisabled(true);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "black", size: "20" }}>
        <EntryContainer>
          <EntryValue
            id={props._id}
            type="number"
            name="weight"
            value={weightValue}
            onChange={(e) => {
              setWeightValue(e.target.value);
            }}
            disabled={inputDisabled}
          ></EntryValue>
          <EntryDate>{date}</EntryDate>
          <EntryActions>
            {inputDisabled ? (
              <MdEdit onClick={handleEdit} />
            ) : (
              <MdSave color="green" onClick={handleSave} />
            )}
            <MdDelete color="red" onClick={handleDelete} />
          </EntryActions>
        </EntryContainer>
      </IconContext.Provider>
    </>
  );
};

export default WeightEntry;

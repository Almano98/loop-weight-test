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

const WeightEntry = ({ entryId, value, date, handleDelete, handleUpdate }) => {
  const [inputDisabled, setInputDisabled] = useState(true);
  const [weightValue, setWeightValue] = useState(value);
  const formattedDate = Moment(date).format("HH:mma - DD/MM/YYYY");
  console.log(value);

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
            id={entryId}
            type="number"
            name="weight"
            value={weightValue}
            onChange={(e) => {
              setWeightValue(e.target.value);
            }}
            disabled={inputDisabled}
          ></EntryValue>
          <EntryDate>{formattedDate}</EntryDate>
          <EntryActions>
            {inputDisabled ? (
              <MdEdit onClick={handleEdit} />
            ) : (
              <MdSave color="green" onClick={handleSave} />
            )}
            <MdDelete color="red" onClick={() => handleDelete(entryId)} />
          </EntryActions>
        </EntryContainer>
      </IconContext.Provider>
    </>
  );
};

export default WeightEntry;

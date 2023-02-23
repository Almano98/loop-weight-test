import React, { useEffect, useRef, useState } from "react";
import api from "../../api";
import {
  FormButton,
  FormInput,
  FormLabel,
} from "../../components/common/FormElements";
import {
  PageContainer,
  PageHeader,
  PageHeaderText,
} from "../../components/common/PageElements";
import WeightEntry from "../../components/WeightEntry";
import {
  DataContainer,
  HomeContainer,
  HomeFormContainer,
  LogoutButton,
  LogoutButtonContainer,
} from "./HomeElements";

const Home = () => {
  const [weightEntries, setWeightEntries] = useState([]);
  const [newWeight, setNewWeight] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .saveWeight({ value: newWeight })
      .then((response) => {
        if (response.status === 200) {
          setWeightEntries([response.data, ...weightEntries]);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    await api
      .deleteWeight(id)
      .then((response) => {
        if (response.status === 200) {
          const filtered = weightEntries.filter((entry) => entry._id !== id);
          setWeightEntries(filtered);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = async (id, value) => {
    await api
      .updateWeight(id, { value })
      .then((response) => {
        if (response.status === 200) {
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    await api
      .getWeightHistory()
      .then((response) => {
        const data = response.data;
        setWeightEntries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <LogoutButtonContainer>
        <LogoutButton>Logout</LogoutButton>
      </LogoutButtonContainer>
      <PageContainer>
        <PageHeader>
          <PageHeaderText>Weight tracking app</PageHeaderText>
        </PageHeader>
        <HomeContainer>
          <HomeFormContainer onSubmit={handleSubmit}>
            <FormLabel htmlFor="weight">Weight</FormLabel>
            <FormInput
              id="weight"
              type="number"
              name="weight"
              value={newWeight}
              onChange={(e) => {
                setNewWeight(e.target.value);
              }}
            ></FormInput>
            <FormButton>Submit</FormButton>
          </HomeFormContainer>
          <DataContainer>
            {weightEntries.length === 0 && <h2>There are no weight entries</h2>}
            {weightEntries.map((entry) => (
              <WeightEntry
                entryId={entry._id}
                key={entry._id}
                value={entry.value}
                date={entry.createdAt}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></WeightEntry>
            ))}
          </DataContainer>
        </HomeContainer>
      </PageContainer>
    </>
  );
};

export default Home;

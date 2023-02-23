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
            {weightEntries.map((entry) => (
              <WeightEntry
                key={entry._id}
                value={entry.value}
                date={entry.createdAt}
              ></WeightEntry>
            ))}
          </DataContainer>
        </HomeContainer>
      </PageContainer>
    </>
  );
};

export default Home;

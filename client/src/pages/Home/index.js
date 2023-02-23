import React, { useEffect, useState } from "react";
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
  const getData = async () => {
    await api
      .getWeightHistory()
      .then((response) => {
        const data = response.data;
        console.log(data);
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
          <HomeFormContainer>
            <FormLabel htmlFor="weight">Weight</FormLabel>
            <FormInput id="weight" type="number" name="weight"></FormInput>
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

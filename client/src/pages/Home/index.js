import React, { useEffect, useRef, useState } from 'react';
import api from '../../api';
import { FormButton, FormInput, FormLabel } from '../../components/common/FormElements';
import { PageContainer, PageHeader, PageHeaderText } from '../../components/common/PageElements';
import WeightEntry from '../../components/WeightEntry';
import { DataContainer, HomeContainer, HomeFormContainer, LogoutButton, LogoutButtonContainer } from './HomeElements';

const Home = () => {
  const [weightEntries, setWeightEntries] = useState([]);
  const [newWeight, setNewWeight] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.saveWeight({ value: newWeight });
      setWeightEntries([response.data, ...weightEntries]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async id => {
    try {
      const response = await api.deleteWeight(id);
      if (response.status === 200) {
        const filtered = weightEntries.filter(entry => entry._id !== id);
        setWeightEntries(filtered);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = async (id, value) => {
    try {
      const response = await api.updateWeight(id, { value });
      if (response.status === 200) {
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const response = await api.getWeightHistory();
      setWeightEntries(response.data);
    } catch (e) {
      console.log(e);
    }
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
              onChange={e => {
                setNewWeight(e.target.value);
              }}
            ></FormInput>
            <FormButton>Submit</FormButton>
          </HomeFormContainer>
          <DataContainer>
            {weightEntries.length === 0 && <h2>There are no weight entries</h2>}
            {weightEntries.map(entry => (
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

import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 50rem;
`;
export const HomeFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: center;
  min-height: 5vh;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const LogoutButton = styled.button`
  border-radius: 40px;
  width: 8rem;
  padding: 0.5rem;
  border: 2px solid #ff918f;
  transition: all 0.3s ease-in-out;
  background: #fff;
  margin: 1rem;
  &:hover {
    // color: white;
    background: #ff918f;
  }
`;

export const LogoutButtonContainer = styled.div`
  float: right;
`;

import styled from "styled-components";

export const EntryContainer = styled.div`
  height: 2rem;
  border: 1.5px solid #92cece;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

export const EntryValue = styled.input`
  font-weight: 400;
  color: black;
  :disabled {
    border: none;
  }
`;

export const EntryDate = styled.p``;

export const EntryActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

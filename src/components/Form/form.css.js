import styled from 'styled-components';

export const Component = styled.form`
  padding: 10px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  p {
    width: 100%;
  }
  label {
    width: 30%;
  }
  input,
  select {
    width: 70%;
  }
`;

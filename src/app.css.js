import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1024px;
  min-height: 90vh;
  margin: 0 auto;
  box-shadow: 0 3px 6px ${({ theme }) => theme.shadow};
`;

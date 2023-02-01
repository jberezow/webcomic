import styled from 'styled-components';

export const StyledComic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    font-size: 16px;
  }
`;
import styled from '@emotion/styled';

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const MoviesItem = styled.li`
  cursor: pointer;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const MoviesTitle = styled.h3`
  text-align: center;
  font-weight: bold;
`;

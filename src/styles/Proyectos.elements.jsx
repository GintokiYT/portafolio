import styled from 'styled-components';

export const ContainerProyecto = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;

  h2 {
    width: 100%;
    font-size: ${({theme}) => theme.fontSize.fs4};
    color: ${({theme}) => theme.color };
    text-align: center;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    max-width: 300px;
    height: 300px;
    background-color: #fff;
  }
`;
import styled from 'styled-components';

export const ContainerProyectos = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;

  .enlaces {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px ;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 20px 0;

    svg {
      font-size: ${({theme}) => theme.fontSize.fs6 };
      color: #1597e0;
      cursor: pointer;
      transition: transform .3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Titulo = styled.h2`
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.fs4};
  color: ${({theme}) => theme.color };
  text-align: center;
  margin-bottom: 10px;
`;

export const Proyecto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`;

export const Contenido = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  overflow: hidden;

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    object-position: center;
    transition: transform 1s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`
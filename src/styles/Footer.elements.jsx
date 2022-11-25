import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 180px;
  background-color: #1597e0;
  margin-top: 30px;
`;

export const ContainerData = styled.div`
  max-width: 425px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #0D1117;

  .titulo {
    font-size: ${({theme}) => theme.fontSize.fs3};
    text-align: center;
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    svg {
      color: #0D1117;
      font-size: ${({theme}) => theme.fontSize.fs4};
      animation: all .3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
import styled from 'styled-components';

export const ContainerHero = styled.div`
  margin-top: 70px;
  width: 100vw;
  min-height: calc(100vh - 70px);
  background: linear-gradient(#16181d7f,rgb(20 20 19 / 50%)),url(./assets/images/hero.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow-y: hidden;

  background-attachment: fixed;

  * {
    font-weight: 800;
    color: #fff;
    margin: 0 20px;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.fs4};
  }

  .name {
    font-size: ${({theme}) => theme.fontSize.fs6};
    background: linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .role {
    text-shadow: 2px 2px 4px #2e9ddd;
  }

  .description {
    text-shadow: 2px 2px 4px #1e2021;
  }

`;
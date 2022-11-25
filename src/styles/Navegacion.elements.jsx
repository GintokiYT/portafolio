import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerHeader = styled.header`
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: ${ ({theme}) => theme.body };
`;

export const ContainerNav = styled.nav`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: ${({theme}) => theme.fontSize.fs3};
    fill: ${ ({theme}) => theme.color};
  }
`;

export const Title = styled.h1`
  font-size: ${({theme}) => theme.fontSize.fs3};
  color: ${({theme}) => theme.color};

  &::before {
    content: '{ ';
    color: #1597e0
  }

  &::after {
    content: ' }';
    color: #1597e0
  }
`;

export const ButtonMenu = styled.button`
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuItems = styled(motion.ul)`
  position: absolute;
  left: 0;
  top: 70px;
  width: 100vw;
  min-height: calc(100vh - 70px);
  background-color: ${ ({theme}) => theme.color };
  list-style: none;
  transform: translateX(100vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    min-height: unset;
    position: relative;
    background-color: transparent;
    top: 0;
    width: auto;
    flex-direction: row;
    gap: 30px;
    color: #fff;
    transform: translateX(0) !important;
  }

  a {
    text-decoration: none;
    font-size: ${ ({theme}) => theme.fontSize.fs3 };
    font-weight: 600;
    color: ${ ({theme}) => theme.menu.text };

    &:hover {
      color: ${ ({theme}) => theme.menu.hover };
    }

    @media (min-width: 768px) {
      font-size: ${ ({theme}) => theme.fontSize.fs2 };
      color: ${ ({theme}) => theme.text };
      font-weight: 400;

      &:hover {
        color: ${ ({theme}) => theme.hover };
      }
    }
  }
`;
import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: grid;
  grid-template-areas: 
    'title'
    'presentacion'
    'habilidades'
    'estudios'
    'icons';
  padding: 30px;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-areas: 
      'title title'
      'presentacion habilidades'
      'estudios habilidades'
      'icons icons';
    gap: 30px;
  }
`;

export const TitleAbout = styled.h2`
  grid-area: title;
  margin: 20px 0;
  text-align: left;
  color: ${({theme}) => theme.color };
  font-size: ${({theme}) => theme.fontSize.fs4};

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const PresentacionAbout = styled.div`
  grid-area: presentacion;

  font-size: ${({theme}) => theme.fontSize.fs3 };
  color: ${({theme}) => theme.text };
  line-height: 1.5;
  font-weight: 300;

  .name {
    text-align: left;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .role {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
    text-shadow: 2px 2px 4px #2e9ddd;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  .caracteristica {
    text-align: left;
    margin-bottom: 20px;
    font-weight: 300;
  }
`;

export const HabilidadesAbout = styled.div`
  grid-area: habilidades;
  font-size: ${({theme}) => theme.fontSize.fs3};
  color: ${({theme}) => theme.text };
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .skill {
    font-size: ${({theme}) => theme.fontSize.fs4};
    font-weight: 800;
  }
`;

export const EstudiosAbout = styled.div`
  grid-area: estudios;
  font-size: ${({theme}) => theme.fontSize.fs3};
  color: ${({theme}) => theme.text };
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .studies {
    font-size: ${({theme}) => theme.fontSize.fs4};
    font-weight: 800;
  }

  a {
    color: ${({theme}) => theme.color };
    text-decoration: none;
    font-weight: 700;
    
    &:hover {
      color: #1e5ddb;
    }
  }
`

export const IconsAbaout = styled.div`
  grid-area: icons;
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: ${({theme}) => theme.fontSize.fs3 };
  color: ${({theme}) => theme.text };
  line-height: 1.5;
  font-weight: 300;

  .iconos {
    font-size: ${({theme}) => theme.fontSize.fs4};
    font-weight: 800;
    margin: 10px 0;

    @media (min-width: 768px) {
      text-align: center;
    }
  }

  .frontend {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    img {
      object-fit: contain;
      object-position: center;
      width: 50px;
      height: 50px;

      @media (min-width: 768px) {
        width: 70px;
        height: 70px;
      }
    }
  }

  .backend {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    img {
      object-fit: contain;
      object-position: center;
      width: 50px;
      height: 50px;

      @media (min-width: 768px) {
        width: 70px;
        height: 70px;
      }
    }
  }
`;
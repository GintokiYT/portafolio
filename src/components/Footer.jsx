import { ContainerFooter, ContainerData } from '../styles/Footer.elements';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (  
    <ContainerFooter>
      <ContainerData>
        <div className="titulo">
          <h3>&#169; Renato Navarro Alberco</h3>
        </div>
        <div className="icons">
          <a href='https://wa.me/934369928? text=hola' target="__blank" rel="noopener noreferrer"><BsWhatsapp /></a>
          <a href='https://www.linkedin.com/in/renato-navarro-alberco-551359219/' target="__blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href='https://github.com/GintokiYT' target="__blank" rel="noopener noreferrer"><BsGithub /></a>
        </div>
      </ContainerData>
    </ContainerFooter>
  );
}
 
export default Footer;
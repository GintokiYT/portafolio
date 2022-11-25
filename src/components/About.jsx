import { ContainerAbout, TitleAbout, PresentacionAbout, HabilidadesAbout, EstudiosAbout, IconsAbaout } from '../styles/About.elements';
import { Container } from '../styles/Components.elements';

const About = () => {
  return (  
    <Container>
      <ContainerAbout>
        <TitleAbout>Sobre mí</TitleAbout>
        <PresentacionAbout>
          <p className='name'>Hola, soy Renato Cristian Navarro Alberco</p>
          <p className='role'>Frontend Developer</p>
          <p className='caracteristica'>Me considero una persona comunicativa, sociable, respetuosa y responsable con lo que se me asigna.</p>
          <p>Respeto las opiniones de mis compañeros y las órdenes de mis superiores y soy puntual en lo que se me ordena.</p>
        </PresentacionAbout>
        <HabilidadesAbout>
          <p className='skill'>Habilidades</p>
          <p>Tengo conocimientos avanzandos en las tecnologías de HTML, CSS, JavaScript y Frameworks como React y NodeJS asi como librerias de Frontend como Framer Motion, Styled-Components entre otros.</p>
          <p>Por otro lado poseo algunos conocimientos de backend manejo Node con Express, Python con Flask, Sequelize, SQL, MySQL, PostgreSQL, MongoDB, FireBase, Git y Jest</p>
          <p>Todas estas tecnologías se utilizan con las mejores prácticas, actualmente estoy aprendiendo inglés y mis habilidades.</p>
        </HabilidadesAbout>
        <EstudiosAbout>
          <p className='studies'>Estudios</p>
          <p>Docencia en especialidad de informática - Universidad Nacional de Educación Enrique Guzmán y Valle</p>
          <p>Estructuras de datos y algoritmos de JavaScript en <a href="https://www.freecodecamp.org/certification/fcc442809ad-6514-453c-91df-f2a75eb4fea3/javascript-algorithms-and-data-structures" target="__blank" rel="noopener noreferrer">freeCodeCamp</a> - 2022</p>
        </EstudiosAbout>
        <IconsAbaout>
          <p className='iconos'>Habilidades Frontend / Backend</p>
          <div className='frontend'>
            <img src="./assets/images/html.png" alt="html" />
            <img src="./assets/images/css.png" alt="css" />
            <img src="./assets/images/js.png" alt="js" />
            <img src="./assets/images/sass.png" alt="sass" />
            <img src="./assets/images/bootstrap.png" alt="Bootstrap" />
            <img src="./assets/images/react.png" alt="react" />
            <img src="./assets/images/git.png" alt="git" />
          </div>
          <hr />
          <div className="backend">
            <img src="./assets/images/nodejs.png" alt="node" />
            <img src="./assets/images/python.png" alt="python" />
            <img src="./assets/images/mysql.png" alt="mysql" />
            <img src="./assets/images/postgre.png" alt="postgresql" />
            <img src="././assets/images/mongodb.png" alt="mongodb" />
            <img src="./assets/images/firebase.png" alt="firebase" />
          </div>
        </IconsAbaout>
      </ContainerAbout>
    </Container>
  );
}
 
export default About;
import { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Globalstyles from '../theme/globalstyles';
import { DarkTheme, LightTheme } from '../theme/theme';

import PortafolioContext from '../context/PortafolioContext';

// Components
import Navegacion from '../components/Navegacion';
import ToggleMenu from '../components/ToggleMenu';

const Home = () => {

  const { theme, menu } = useContext(PortafolioContext);

  useEffect(() => {
    const body = document.querySelector('body');
    
    if(menu === 'open') {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
  }, [menu])

  return (  
    <ThemeProvider theme={theme === 'dark'? DarkTheme : LightTheme}>
      <Globalstyles />
      <Navegacion />
      <ToggleMenu />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam exercitationem, incidunt sapiente nihil laboriosam dicta eligendi nostrum, enim accusantium dolorum quasi, nisi tenetur optio? Excepturi, beatae blanditiis. Ratione, quod tempora.
        Iste, doloremque! Delectus maiores modi magnam assumenda! Architecto aspernatur saepe eaque accusamus laboriosam cum? Corrupti modi distinctio sequi dolores incidunt error adipisci culpa non eligendi. Vel a asperiores culpa ducimus!
        Quos iusto laudantium totam tenetur! Eum deserunt ea obcaecati vitae quasi ipsa hic aperiam, accusamus blanditiis, dicta atque iure dignissimos quas? Eaque, quasi qui voluptates molestias ratione tempora itaque eos.
        Accusamus eum id numquam perferendis. Nihil delectus officiis tenetur sed aliquid laboriosam cupiditate quisquam eaque error quasi, illum est maxime corporis eveniet magnam, quos repellat beatae nemo accusantium aperiam? Fugiat.
        Quia pariatur saepe non quisquam, cupiditate alias laborum, obcaecati molestias possimus minima, neque dolorum harum. Vel magnam quod velit fugiat distinctio enim illum officiis odio dicta corrupti, praesentium impedit hic?
        Perferendis soluta laudantium animi natus quis fugiat error et hic magni totam. Iste consequatur ut temporibus aspernatur earum repellat, numquam recusandae accusantium vero suscipit illo minima iusto reprehenderit alias nesciunt?
        Deserunt quod quam rem molestiae nesciunt at, in excepturi quasi, hic ut vitae? Eum atque nisi ab libero cumque, id asperiores nobis velit placeat totam quia recusandae excepturi et cum.
        Sint illum est rerum minima possimus, vel fugiat cum quae repellat ab facilis blanditiis et, numquam nostrum quam quaerat quisquam aut quis consequatur dicta molestiae fugit soluta. Dicta, fuga nulla.
        Pariatur vitae, dicta inventore perferendis tenetur accusamus quia, minus saepe sapiente necessitatibus impedit at exercitationem numquam aspernatur obcaecati quidem sint architecto non praesentium animi, iure voluptatibus. Voluptas, obcaecati temporibus! Qui?
        Iste modi commodi ut eligendi totam unde iusto natus reprehenderit vitae? Eligendi impedit at dignissimos enim illum eos, quia incidunt? Tenetur reprehenderit sequi aliquam fugit molestiae temporibus hic distinctio. Ipsa.
        Quibusdam illum eaque aut distinctio vel inventore placeat fugiat dignissimos odio expedita atque, consequatur non ducimus numquam dolore repellendus, laborum molestias tempore? Similique ab id dolorum laudantium ipsum eveniet labore!
        Voluptatum eos praesentium soluta, fugit nisi deleniti aspernatur recusandae, cum consequuntur molestias, voluptatibus tempore nesciunt. Quae omnis aut nobis! Error nemo quaerat, accusantium odit delectus rem consequatur sapiente soluta tempore!
        Magni laudantium in ratione minus optio voluptatum alias consequuntur error perferendis repellendus, quisquam nostrum molestias dolores rem. Nam repudiandae ipsa delectus necessitatibus quas quae eveniet sit aliquid! Aut, itaque dolorem.
        Exercitationem ab blanditiis sunt nesciunt, maxime porro rem quidem facere, placeat quo corrupti sequi, nobis vero necessitatibus voluptate alias ex aperiam temporibus perspiciatis. Quasi vitae perspiciatis architecto! Reprehenderit, ipsa libero?
        Mollitia quibusdam quasi facilis inventore, velit minus laborum quisquam architecto fugiat aut similique ratione dolorem. Adipisci modi quod libero possimus dolores dignissimos distinctio soluta hic aliquam? Voluptas eligendi officia labore.
        Dignissimos consequatur sequi quam officiis vel est, reiciendis a? Debitis cupiditate animi labore pariatur commodi voluptates a repudiandae eligendi ipsa modi, doloremque, et harum dicta, quam illum enim voluptatem voluptate.
        Iure a aperiam, expedita numquam, in consequuntur vel optio exercitationem recusandae quaerat perspiciatis. Doloremque perspiciatis quaerat ad quasi ducimus, commodi aspernatur pariatur quo vel fuga exercitationem ab illo hic eligendi.
        Iste nostrum ea dolorem officiis rem minus quia soluta at saepe magnam nemo magni cum temporibus voluptas, ipsa molestias aspernatur error doloribus, dolores placeat odio aperiam quod. Quibusdam, soluta aperiam!
        Illo, ea. Molestiae adipisci at, quisquam voluptate maxime voluptates quos molestias mollitia doloribus incidunt, reiciendis neque esse explicabo autem fugiat tempore repudiandae, quas cupiditate error ea! Quidem obcaecati unde dignissimos!
        Culpa dolores earum nulla quaerat quisquam incidunt tenetur perspiciatis cum accusantium eum reiciendis enim amet autem vel ratione corrupti nam, iure, dolor esse nobis veniam quasi optio sunt? Minima, natus!
      </div>
    </ThemeProvider>
  );
}
 
export default Home;
import Home from './pages/Home';

import PortafolioState from './context/PortafolioState';

const App = () => {
  return (  
    <PortafolioState>
      <Home />
    </PortafolioState>
  );
}
 
export default App;
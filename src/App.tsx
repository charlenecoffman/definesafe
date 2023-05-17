import AllRoutes from './AllRoutes';
import { TopMenu } from './components/TopMenu';
import './App.css';
import { Authentication } from './components/Authentication';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <Authentication>
          <TopMenu />
          <AllRoutes />
        </Authentication>
      </header>
    </div>
  );
}

export default App;

import AllRoutes from './components/AllRoutes';
import { TopMenu } from './components/TopMenu';
import './App.css';
import { Authentication } from './components/Authentication';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
        <Authentication>
          <TopMenu />
          <Layout>
            <AllRoutes />
          </Layout>
        </Authentication>
    </>
  );
}

export default App;

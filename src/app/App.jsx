import { Helmet } from 'react-helmet';
import SideNavbar from '../components/SideNavbar';
import AppRouter from './router'

function App() {
  return (
    <div className="app">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SideNavbar />
      <AppRouter/>
      {/* <aside>
        <SideNavbar/>
      </aside>
      <main className="main">
        <AppRouter/>
      </main> */}
    </div>
  );
}

export default App;

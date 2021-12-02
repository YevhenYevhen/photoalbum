import './App.css';
import { CssBaseline } from '@material-ui/core';
import useStyles from './styles';

import Header from './Components/Header';
import Heading from './Components/Heading';
import Cards from './Components/Cards';
import Footer from './Components/Footer';



function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.wrapper}>
          <Heading />
          <Cards />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;

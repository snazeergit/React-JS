import logo from './logo.svg';
import './App.css';
import { Footer } from './common/Footer/Footer';
import { Header } from './common/Header/Header';
import { BeforeLogin } from './components/BeforeLogin';
import { AfterLogin } from './components/AfterLogin';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className="App">
      <Header />
      {props.isLoggedIn? <AfterLogin/>:<BeforeLogin/>}
      <Footer />
    </div>
  );
}
App = connect((state) => {
  return {
    isLoggedIn:state.appReducer.isLoggedIn
  }
})(App)
export default App;

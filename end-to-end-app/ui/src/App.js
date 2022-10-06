import logo from './logo.svg';
import './App.css';
import { Footer } from './common/Footer/Footer';
import { Header } from './common/Header/Header';
import { BeforeLogin } from './components/BeforeLogin';
import { AfterLogin } from './components/AfterLogin';
import { connect } from 'react-redux';
import { Loader } from './common/Loader/Loader';
import { appStore } from './store/appStore';

function App(props) {
  if(localStorage.token){
    appStore.dispatch({type:"AUTH", payload:true})
  }
  const { isLoggedIn, isShowLoader } = props
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? <AfterLogin /> : <BeforeLogin />}
      <Footer />
      {isShowLoader && <Loader />}
    </div>
  );
}
App = connect((state) => {
  const { isLoggedIn, isShowLoader } = state.appReducer
  return {
    isLoggedIn: isLoggedIn,
    isShowLoader: isShowLoader
  }
})(App)
export default App;

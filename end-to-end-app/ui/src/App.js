import logo from './logo.svg';
import './App.css';
import { Footer } from './common/Footer/Footer';
import { Header } from './common/Header/Header';
import { BeforeLogin } from './components/BeforeLogin';
import { AfterLogin } from './components/AfterLogin';
import { connect } from 'react-redux';
import { Loader } from './common/Loader/Loader';
import { appStore } from './store/appStore';

//any function outside App wanted to send data to App comp then it will be received as props
function App(props) {
  //for the first time it will be false as we have not logged in yet.succesful login will store the token in localStorage
  if (localStorage.token) {
    appStore.dispatch({ type: "AUTH", payload: true })
  }
  //destrcturing props
  const { isLoggedIn, isShowLoader } = props
  return (
    <div className="App">
      <Header />
      {/*CONDITIONAL RENDERING: when isLoggedIn is true AfterLogin comp will be loaded else BeforeLogin comp will be loaded */}
      {isLoggedIn ? <AfterLogin /> : <BeforeLogin />}
      <Footer />
      {isShowLoader && <Loader />}
    </div>
  );
}
//connect() takes function as an argument hence we passed a anonymous function
App = connect((state) => {
  const { isLoggedIn, isShowLoader } = state.appReducer
  //returned values will be available to App comp in props
  return {
    isLoggedIn: isLoggedIn,
    isShowLoader: isShowLoader
  }
})(App)
export default App;

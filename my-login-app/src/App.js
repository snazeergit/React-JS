import logo from './logo.svg';
import './App.css';
import {AfterLoggedIn} from './AfterLoggedIn'
import {BeforeLoggedIn} from './BeforeLoggedIn'
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'
import {appStore} from './redux/appStore'
import {connect}from 'react-redux'

function App(props) {
const {isLoggedIn}=props
  return (
    <div className="App">
      <Header/>
      {isLoggedIn? <AfterLoggedIn/>: <BeforeLoggedIn/>}
      <Footer/>
    </div>
  );
}

App=connect((state)=>{
  return {
    isLoggedIn:state.myReducer.isLoggedIn
  }
})(App)

export default App;

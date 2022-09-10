import './App.css';
import template from './App.jsx';

function App() {
  //return template.call(this)
  //return template.apply(this)
  return template.bind(this)()
}

export default App;
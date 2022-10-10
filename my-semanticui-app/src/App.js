import React, { useState } from 'react'
import './App.css';
import { Progress, Button } from 'semantic-ui-react'

function App() {
  const [progress, setProgress] = useState(0)
  const fnIncrease = () => {
    setProgress(progress + 10)
  }
  const fnDecrease = () => {
    setProgress(progress - 10)
  }
  return (
    <div>
      <div className='App-header'>Welcome to Semantic UI React</div>
      <marquee>Semantic UI React provides React components while Semantic UI provides themes as CSS stylesheets. Install the React components and choose a theme that suits your needs.</marquee>
      <h2 className='App-center'> Semantic UI is a user-centric React UI framework that simplifies HTML into an easily readable form.</h2>
      <Progress percent={progress} indicating />
      <div className='App-center'>
        <Button onClick={fnIncrease}>Increment</Button>
        <Button onClick={fnDecrease}>Decrement</Button>
        <Button onClick={() => { setProgress(0) }}>Reset</Button>
      </div>
      <div className='App-footer'>&copy; Blazing deployments by Vercel.Inc</div>
    </div>
  );
}

export default App;

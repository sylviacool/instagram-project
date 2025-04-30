import React from 'react'
import Header from './Components/Header'
import Story from './Components/Story'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <div className="w-[60rem] h-[60rem] mx-auto px-4">
        <Header />
        <div className="flex space-x-4">
          <Story name="Your story" />
          <Story name="3gx__" />
          <Story name="faybeyondthecl..." />
          <Story name="futur" />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default App
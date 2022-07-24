import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="flex w-screen h-screen selection:bg-blue-400/20">
      <div className="h-full w-[60%]"></div>
      <div className="h-full w-[40%] bg-base flex flex-col px-16">
        <Search />
        <div className='bg-red-600/40 h-[50%] w-full'></div>
      </div>
    </div>
  );
}

export default App;

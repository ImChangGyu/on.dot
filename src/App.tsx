import React from 'react';
import { RecoilRoot } from "recoil";
import { TextBox } from "./Components";

function App() {
  return (
    <>
      <RecoilRoot>
        <TextBox />
      </RecoilRoot>
    </>
  );
}

export default App;

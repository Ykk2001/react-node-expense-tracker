import React from "react";
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./Styles/Layouts";
import Navigation from "./Components/Navigation/Navigation";
import { useState, useMemo } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./Context/globalContext";
import Orb from './Components/Orb/Orb';

function App() {
  const [active, setActive] = useState(1)
  const global = useGlobalContext()
  console.log(global)
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />

    }
  }//display Data

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  return (
    <Appstyled $bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </Appstyled>
  );
}
//styled component

const Appstyled = styled.div`
height:100vh;
background-image:url(${props => props.bg});
position:relative;

main{
flex:1;
background: rgba(252, 246, 249, 0.78);
border:3px solid #FFFFFF
backdrop-filter:blur(4.5px); 
border-radius:32px;
overflow-x:hidden;
&::-webkit-scrollbar{
width:0;
}
}
`;


export default App;





/*NOTES
1)MainLayout:
This is likely a wrapper component used to organize and style the content inside the app. It wraps both the Navigation and main sections.
*/
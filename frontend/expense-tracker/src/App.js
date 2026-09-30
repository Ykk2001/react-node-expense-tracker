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
import Login from "./Components/Auth/Login";

function App() {

  //check if user Data exist in localstorage
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')||null));
  console.log("user in App component",user)

  const [active, setActive] = useState(1)
  const global = useGlobalContext()
  
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])


  //if user is not logged in ,show the login screen
  if(!user)
  {
    return <Login setUser={setUser}/>  //if user is not logged in then logged in or register the user
  }

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

  
  return (
    <Appstyled $bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} user={user} setUser={setUser}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </Appstyled>
  );
}

export default App;

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




/*NOTES
1)MainLayout:
This is likely a wrapper component used to organize and style the content inside the app. It wraps both the Navigation and main sections.
*/
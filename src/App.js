import React, { createContext } from "react";
import ComA from "./ComA";
import Todolist from "./TodoList";
// import React, {Suspense, lazy} from "react";
// import Home from "./Home";
// const Home = lazy(()=>import("./Home"))
const firstName = createContext();
const lastName = createContext();
function App() {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
      {/* --Lazy Loading-- */}

      {/* <div>H1</div>
      <Suspense fallback={<div>please wait....</div>}>
      <Home />
      </Suspense> */}

      {/* --context API-- */}
      {/* <firstName.Provider value={"Saurav"}>
        <lastName.Provider value={"kumar"}>
          <ComA></ComA>
        </lastName.Provider>
      </firstName.Provider> */}

      {/* useContext hook */}
      

      {/* todoApp */}
      <Todolist/>
    </div>
  );
}

export default App;
export { firstName, lastName };

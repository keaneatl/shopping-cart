import { Outlet } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Outlet />
    </div>
  );
}

export default App;

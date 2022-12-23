import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;

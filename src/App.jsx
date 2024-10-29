import { Route, Routes } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";
import { CardComponent } from "./components/CardComponent";
import Homepage from "./pages/home/Homepage";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/card" element={<CardComponent />} />
      </Routes>
    </>
  );
}

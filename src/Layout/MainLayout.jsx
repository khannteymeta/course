import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent.jsx";
import { FooterComponent } from "../components/FooterComponent.jsx";
export default function MainLayout() {
  return (
    <>
      <header>
        <NavBarComponent />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

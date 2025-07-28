import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 p-4 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

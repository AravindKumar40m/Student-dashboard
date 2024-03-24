import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ isLogin, setIsLogin }) {
  return (
    <div className="flex flex-col h-screen">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className="flex flex-1 overflow-auto">
        <Sidebar />
        <main className="flex-1 bg-[#F5F5F5 ]  p-12 overflow-scroll">
          <div className="max-w-screen-xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

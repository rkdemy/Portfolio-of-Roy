import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Modal from "../component/Modal";

const Root = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Outlet />
        {/*@ts-ignore*/}
        <Modal />
      </main>
    </div>
  );
};

export default Root;

import Header from "./Header";
import Sidebar from "./Sidebar";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div id="layout">
      <Header />
      <div id="content-wrapper">
        <Sidebar />
        <div id="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;

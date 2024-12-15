import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Fragment>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </Fragment>
  );
};

export default AdminLayout;

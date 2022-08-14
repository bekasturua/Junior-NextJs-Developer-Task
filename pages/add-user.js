import { Fragment } from "react";
import AddUser from "../components/home/AddUser";
import Navigation from "../components/home/Navigation";

export default function AddUserPage() {
  return (
    <Fragment>
      <Navigation />
      <AddUser />
    </Fragment>
  );
}

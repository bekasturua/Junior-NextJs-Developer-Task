import Users from "../components/home/users";
import Navigation from "../components/home/Navigation";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Users />
    </Fragment>
  );
}

import { Fragment } from "react";
import EditUser from "../components/home/EditUser";
import Navigation from "../components/home/Navigation";
import axios from "axios";

export default function EditUserPage({ fetchedUser }) {
  return (
    <Fragment>
      <Navigation />
      <EditUser fetchedUser={fetchedUser}/>
    </Fragment>
  );
}

EditUserPage.getInitialProps = async (ctx) => {
  const userId = ctx.query.userId;
  const fetchedUser = await axios.get(`http://localhost:3000/users/${userId}`);
  return { fetchedUser: fetchedUser.data };
};

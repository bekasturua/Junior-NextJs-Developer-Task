import Users from "../components/home/users";
import Navigation from "../components/home/Navigation";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsersIntoState } from "../slices/userSlice";
import axios from 'axios'

function Home({ fetchedUsers }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUsersIntoState(fetchedUsers));
  }, [dispatch])

  return (
    <Fragment>
      <Navigation />
      <Users />
    </Fragment>
  );
}

Home.getInitialProps = async () => {
  const fetchedUsers = await axios.get("http://localhost:3000/users");
  return { fetchedUsers: fetchedUsers.data };
};

export default Home;

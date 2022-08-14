import Users from "../components/home/users";
import Navigation from "../components/home/Navigation";
import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addUsersIntoState } from './userSlice'

export default function Home() {
  const users = useSelector((state) => state.user.users)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Navigation />
      <Users />
    </Fragment>
  );
}

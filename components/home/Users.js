import classes from "./Users.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  deleteUserFromState,
  changeUsersInState,
} from "../../slices/userSlice";

function Users() {
  const onSortClickHandlerAsc = async (event) => {
    const res = await axios.get(
      `http://localhost:3000/users?_sort=age&_order=asc&_expand=status&&_expand=role`
    );
    dispatch(changeUsersInState(res.data));
  };

  const onSearchHandler = async (event) => {
    const res = await axios.get(
      `http://localhost:3000/users?q=${event.target.value}&_expand=status&_expand=role`
    );
    dispatch(changeUsersInState(res.data));
  };
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const onDeleteHandler = async (userId) => {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    dispatch(deleteUserFromState(userId));
  };

  return (
    <section>
      <div>
        <input
          placeholder="Search..."
          className={classes.input}
          type="text"
          name="name"
          onChange={onSearchHandler}
        />
      </div>
      <div>
        <button className={classes.sort} onClick={onSortClickHandlerAsc}>Sort by age</button>
      </div>
      <div>
        <div className={classes.col}>
          {users.map((user) => {
            return (
              <div key={user.id} className={classes.user_card}>
                <Link
                  href={{ pathname: "/edit-user", query: { userId: user.id } }}
                >
                  <div>
                    <div className={classes.user}>
                      <div>
                        <p>FirstName: {user.firstName}</p>
                        <p>LastName: {user.lastName}</p>
                        <p>Age: {user.age}</p>
                        <p>Status: {user.status.name}</p>
                        <p>Role: {user.role.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className={classes.delete_btn}>
                  <button onClick={() => onDeleteHandler(user.id)}>
                    Delete User
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;

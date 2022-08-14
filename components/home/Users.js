import classes from "./Users.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import User from "./User";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUserFromState } from "../../slices/userSlice";

function Users() {
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
        />
      </div>
      <div>
        <div className={classes.d}>
          {users.map((user) => {
            return (
              <Link
                href={{ pathname: "/edit-user", query: { userId: user.id } }}
                key={user.id}
              >
                <User user={user} onDeleteHandler={onDeleteHandler} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;

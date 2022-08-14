import Link from "next/link";

import classes from "./Navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Users</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All User</Link>
          </li>
          <li>
            <Link href="/">Add User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

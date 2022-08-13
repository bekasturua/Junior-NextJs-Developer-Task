import axios from "axios";
import roles from "./data/role.data.mjs";
import statuses from "./data/status.data.mjs";
import users from "./data/user.data.mjs";


try {
  const response = await axios.post("http://localhost:3000/users", users);
  console.log(response);
} catch (error) {
  console.log(error);
}

try {
  const response = await axios.post("http://localhost:3000/statuses", statuses);
  console.log(response);
} catch (error) {
  console.log(error);
}

try {
  const response = await axios.post("http://localhost:3000/roles", roles);
  console.log(response);
} catch (error) {
  console.log(error);
}

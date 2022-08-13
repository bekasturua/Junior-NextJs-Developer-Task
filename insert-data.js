import axios from "axios";
import roles from "./data/role.data.js";
import statuses from "./data/status.data.js";
import users from "./data/user.data.js";


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

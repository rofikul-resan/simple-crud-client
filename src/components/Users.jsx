import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h1>total user {users.length}</h1>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            {" "}
            <h1>{user.name}</h1> <p>{user.email}</p>
            <button onClick={() => deleteUser(user._id)}>Delete User</button>
            <button>
              <Link to={`/update/${user._id}`}>update User</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

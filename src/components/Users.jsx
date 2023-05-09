import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>total user {users.length}</h1>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            {" "}
            <h1>{user.name}</h1> <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

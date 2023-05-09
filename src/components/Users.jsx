import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

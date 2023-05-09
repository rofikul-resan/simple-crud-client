import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  console.log(user);
  const updateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(user);
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <form onSubmit={updateUser}>
        <input type="text" name="name" defaultValue={user?.name} />
        <br />
        <input type="text" name="email" defaultValue={user?.email} />
        <br />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default Update;

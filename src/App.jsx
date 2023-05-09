import "./App.css";

function App() {
  const addUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
      });
  };
  return (
    <>
      <h1>Simple crud</h1>
      <form onSubmit={addUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button>add user</button>
      </form>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { CreateUserForm } from "./CreateUserForm";
import { UserTable } from "./UserTable";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [triggerRefresh, setTriggerRefresh] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [triggerRefresh]);

  return (
    <main className="my-24">
      <p className="text-center text-lg">Welcome to Poridhi's</p>
      <p className="text-center font-bold text-3xl">DevOps Hackathon</p>
      <p className="text-center mt-2 text-lg">Powered by Brilliant Cloud</p>
      <div className="flex justify-center items-center mx-auto mt-4">
        <img
          src="/poridhi.png"
          alt="poridhi"
          className="rounded-full w-48 h-48"
        />
        <div className="px-4" />
        <img
          src="/brilliantCloud.png"
          alt="brilliant cloud"
          className="rounded-full w-32 h-32"
        />
      </div>
      <UserTable userData={userData} />
      <CreateUserForm setTriggerRefresh={setTriggerRefresh} />
    </main>
  );
};

export default App;

import { useEffect, useState } from "react";
import useToken from "../hooks/useToken";
import axios from "axios";

function Profile() {
  const [message, setMessage] = useState(null);
  const { token } = useToken();

  useEffect(() => {
    async function fetchMessage() {
      try {
        const res = await axios.get("http://localhost:8080/hello/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res)
        setMessage(res.data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    }

    fetchMessage();
  }, [token]);

  return (
    <div>
      {message ? (
        <div>
          <h1>{message}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;

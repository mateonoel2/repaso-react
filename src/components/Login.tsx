import axios from "axios";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

type LoginDto = {
  email: string;
  password: string;
};

function Login() {
  const { setToken } = useToken();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";

    const loginDto: LoginDto = {
      email,
      password,
    };

    console.log(loginDto);
    const res = await axios.post("http://localhost:8080/auth/login", loginDto);
    console.log(res.data);

    const { token } = res.data;
    setToken(token);

    navigate("/profile");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col mx-auto"
        >
          <input
            className="outline rounded p-1"
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            className="outline rounded p-1"
            type="password"
            placeholder="password"
            name="password"
          />

          <button
            className="rounded bg-blue-400 hover:bg-blue-300 p-1"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

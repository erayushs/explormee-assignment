import { useNavigate } from "react-router";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  type User = {
    name: string;
    email: string;
  };

  const plan: string | null = localStorage.getItem("plan");
  const userData = localStorage.getItem("user");

  const user: User | null = userData ? (JSON.parse(userData) as User) : null;

  return (
    <div className="flex-col bg-gradient-to-b from-transparent via-white to-yellow-300 min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-center leading-10 p-10">
        Congratulations, {user?.name}! <br /> You have successfully signed up
        for the {plan} plan with the email {user?.email}.
      </h1>

      <button
        className="mt-4 px-4 py-2 bg-black text-white rounded-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default ConfirmationPage;

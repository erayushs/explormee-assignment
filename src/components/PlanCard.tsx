import checkIcon from "../assets/checkfill.svg";
import checkIconWhite from "../assets/checkfillWhite.svg";
import { useNavigate } from "react-router";

interface PlanCardProps {
  planName?: string;
  para?: string;
  price?: string;
  features?: string[];
}

const PlanCard = ({ planName, para, price, features }: PlanCardProps) => {
  const upperCasePlanName = planName?.toUpperCase() || "PLAN";

  const navigate = useNavigate();

  return (
    <div
      className={`${
        planName === "Professional" ? `bg-[#000B6B] lg:h-[600px]` : `bg-white`
      } lg:w-[353px] lg:h-[550px] border p-4 rounded-2xl lg:pt-8`}
    >
      {planName === "Professional" && (
        <span className="text-[#000B6B] bg-[#A9B2FF] p-1 rounded text-[12px] ">
          Recommended
        </span>
      )}
      <h1
        className={`${
          planName === "Professional" && `mt-4`
        } text-[18px] font-semibold bg-[#F2F2F2] p-2 rounded-lg w-fit`}
      >
        {upperCasePlanName}
      </h1>

      <div
        className={`${
          planName === "Professional" ? "text-white" : "text-[#333333]"
        } `}
      >
        <p className={`mt-4 text-[14px]`}>{para}</p>

        <span className="border-t border-gray-400 mt-4 block"></span>

        <p className="text-[66px] font-semibold leading-18 mt-4">${price}</p>
        <span className="text-[14px]">Per member, per Month</span>

        <span className="border-t border-gray-400 mt-8 block"></span>

        <ul className="mt-4">
          {features?.map((feature, index) => (
            <li key={index} className={`flex items-center gap-4 text-[14px]`}>
              <img
                src={planName === "Professional" ? checkIconWhite : checkIcon}
                alt="check-icon"
              />
              <span className="inline-block p-1 pl-0 text-[14px]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            switch (planName) {
              case "Basic":
                localStorage.setItem("plan", "Basic");
                break;
              case "Professional":
                localStorage.setItem("plan", "Professional");
                break;
              case "Premium":
                localStorage.setItem("plan", "Premium");
                break;
              default:
                localStorage.setItem("plan", planName || "Unknown");
                break;
            }
            navigate("/signup");
          }}
          className={`${
            planName === "Professional"
              ? `bg-white text-[#000B6B]`
              : `bg-black text-white`
          } w-full h-[50px] rounded-lg mt-8 font-semibold cursor-pointer`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

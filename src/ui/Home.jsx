import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500 ">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === " " ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          continue ordering, {username}
        </Button>
      )}

      <div>
        {array?.map((item, index) => (
          <div key={index} className="mb-5">
            <p>Question: {item.question}</p>
            {item?.option.map((i, ind) => (
              <button
                className=" ml-5 bg-red-500"
                key={ind}
                onClick={() => {
                  (array[index].yourAns = i), console.log(array);
                }}
              >
                {ind + 1}:{i}
              </button>
            ))}
            <p>Your Ans: {item.yourAns}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
let array = [
  {
    question: "bukhar type",
    option: ["jukham", "sirdrd", "bhana", "other"],
    orignalAns: "jukham",
    yourAns: "",
  },
  {
    question: "2+2 = ?",
    option: ["4", "2", "1", "0"],
    yourAns: "",
    orignalAns: "4",
  },
];

export default Home;

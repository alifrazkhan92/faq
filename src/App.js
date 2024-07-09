import { useState } from "react";
import "./App.css";
import AccordItem from "./Components/AccordItem";

const data = [
  {
    Question: "How to get admission?",
    Ans: "By applying through our Apply online",
  },
  {
    Question: "What is your refund policy?",
    Ans: "This is an online service, where there are free lessons are available to try, therefore, we do not refund the fee after your purchase a course.",
  },
  {
    Question: "Do you offer on online doubt session?",
    Ans: "Yes, We offer online doubt session, where, you can discuss your doubts.",
  },
  {
    Question: "Do I need previous education?",
    Ans: "No, you do not need any previous education to enroll in our courses.",
  },
  {
    Question: "Why should I join your course?",
    Ans: "Our courses works like a bridge for univsersity student to match the job environment.",
  },
];
function App() {
  const [openAns, setOpenAns] = useState(0);

  const handleStatus = (ind) => {
    if (openAns === ind) {
      setOpenAns(null);
    } else {
      setOpenAns(ind);
    }
  };

  return (
    <>
      <div className="w-[1200px] mx-auto bg-[skyblue]">
        <h1 className="text-center text-[32px] font">Accordion</h1>
        <div className="">
          {data.map((item, index) => (
            <AccordItem
              key={index}
              details={item}
              ifOpen={openAns === index}
              check="test perpose"
              handleFunction={() => {
                handleStatus(index);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

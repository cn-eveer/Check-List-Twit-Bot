import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { toast, Zoom } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const TaskError = () => {
  toast.error("Not entered ", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
const OverError = () => {
  toast.error("20 characters or less", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskTitle = styled.h1`
  margin-top: 10%;
  font-size: 40px;
  font-family: "Caveat", cursive;
`;

const ModalWrapper = styled(motion.div)`
  width: 400px;
  height: 600px;
  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2); */
  background: #fff;
  color: #000;
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    width: 50%;
    height: 45px;
    font-size: 20px;
    margin-top: 15%;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    border-radius: 10px;
    opacity: 0.7;
    transition: all 0.4s;
    cursor: pointer;
  }
  button:hover {
    opacity: 1;
  }
`;
const Space = styled.div`
  margin-top: 20px;
`;
const P = styled.p`
  font-family: "Caveat", cursive;
  margin: 10px auto;
  font-size: 20px;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  width: 28px;
  height: 27px;
  padding: 0;
  z-index: 10;
  border: none;
  /* background-color: ; */
`;

const TextInput = styled.input`
  margin-top: 10%;
  width: 80%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #7e7c7c;
  outline: none;
  //   color: "#ccc",
  font-size: 20px;
  align-items: center;
`;

// const TimeWrapper = styled.div`
//   margin: 30px 0;
//   display: flex;
//   width: 70%;
//   justify-content: space-between;
// `;

const Time = styled.div`
  width: 80%;
  margin-top: 20px;
`;
const TimeInput = styled.input`
  font-size: 15px;
  width: 50%;
  height: 45px;
  text-align: center;
  border-radius: 10px;
  outline: none;
`;

function EditTask({ editOpen, setEditOpen }) {
  const [taskDate, setTaskDate] = useState("");
  const [fTime, setFTime] = useState("");
  const [title, setTitle] = useState("");
  const [count, setCount] = useState();
  const countChange = (e) => {
    setCount(e.target.value.length);
  };
  const handleTaskDateChange = (e) => {
    setTaskDate(e.target.value);
  };
  const handleFTimeChange = (e) => {
    setFTime(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const confirmTask = ({ title, date, time }) => {
    if (title === "" || time === "" || date === "") {
      // setOpen(false);
      TaskError();
    } else if (count > 20) {
      OverError();
    } else {
      setEditOpen(false);
    }
  };
  return (
    <>
      {editOpen && (
        <Background>
          <ModalWrapper
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [-100, 30, 0],
              transition: { duration: 0.4 },
            }}
          >
            <ModalContent>
              <TaskTitle>Edit Schedule</TaskTitle>
              <TextInput
                onChange={(e) => {
                  handleTitleChange(e);
                  countChange(e);
                }}
                type="text"
                name="title"
                id="title"
                placeholder="Task Name..."
                value={title}
              />
              <Time>
                <P>Date</P>
                <TimeInput
                  onChange={handleTaskDateChange}
                  // onKeyUp={countChange}
                  type="date"
                  name="today"
                  id="today"
                  value={taskDate}
                  required
                />
              </Time>
              <Space />
              <Time>
                <P>Finish Time</P>
                <TimeInput
                  onChange={(e) => handleFTimeChange(e)}
                  type="time"
                  name="finish"
                  id="finish"
                  value={fTime}
                  required
                />
              </Time>
              {/* </TimeWrapper> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  confirmTask({ title: title, date: taskDate, time: fTime })
                }
              >
                Add Task !!!
              </motion.button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setEditOpen(false)}
            >
              <AiFillCloseCircle />
            </CloseModalButton>
          </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      )}
    </>
  );
}

export default EditTask;

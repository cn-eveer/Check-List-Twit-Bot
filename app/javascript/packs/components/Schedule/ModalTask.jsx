import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";

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

const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2); */
  background: #fff;
  color: #000;
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
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
  margin-top: 20px;
  width: 80%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #7e7c7c;
  outline: none;
  //   color: "#ccc",
  font-size: 20px;
  align-items: center;
`;
const TimeWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const Time = styled.div`
  width: 100px;
`;
const TimeInput = styled.input`
  width: 150px;
  font-size: 25px;
`;

function ModalTask({ open, setOpen }) {
  const date1 = new Date();
  const h = date1.getHours();
  const m = date1.getMinutes();
  const fH = h + 1;
  const [sTime, setSTime] = useState(`${h}:${m}`);
  const [fTime, setFTime] = useState(`${fH}:${m}`);
  const [title, setTitle] = useState("");

  const handleSTimeChange = (e) => {
    console.log(e.target.value);
    setSTime(e.target.value);
  };
  const handleFTimeChange = (e) => {
    console.log(e.target.value);
    setFTime(e.target.value);
  };
  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  return (
    <>
      {open && (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <h1>Add Task !!</h1>
              <TextInput
                onChange={handleTitleChange}
                type="text"
                name="title"
                id="title"
                placeholder="Task Name..."
              />
              <TimeWrapper>
                <Time>
                  <p>start time</p>
                  <TimeInput
                    onChange={handleSTimeChange}
                    type="time"
                    name="start"
                    id="start"
                    // value={`${h}:${m}`}
                    value={sTime}
                  />
                </Time>
                <Time>
                  <p>finish time</p>
                  <TimeInput
                    onChange={handleFTimeChange}
                    type="time"
                    name="finish"
                    id="finish"
                    value={fTime}
                  />
                </Time>
              </TimeWrapper>
              <button onClick={() => setOpen(false)}>Add</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setOpen(false)}
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

export default ModalTask;

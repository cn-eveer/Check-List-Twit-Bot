import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  /* padding: "60px 30px", */
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

// const CloseModalButton = styled(MdClose)`
const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
function ModalTask({ open, setOpen }) {
  return (
    <>
      {open && (
        // <div>
        //   <form>
        //     <input type="text" placeholder="task ..." />
        //     <input type="number" name="start-h" id="start-h" />:
        //     <input type="number" name="start-m" id="start-m" />
        //     <input type="number" name="finish-h" id="finish-h" />:
        //     <input type="number" name="finish-m" id="finish-m" />
        //   </form>
        //   <button onClick={() => setOpen(false)}>Close Modal</button>
        // </div>
        <Background onClick={() => setOpen(false)}>
          {/* <animated.div style={animation}> */}
          <ModalWrapper>
            {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch.</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setOpen(false)}
            />
          </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      )}
    </>
  );
}

export default ModalTask;

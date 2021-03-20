import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import CheckBox from "react-animated-checkbox";
const Div = styled.div`
  display: flex;
  margin: 10px 0 10px;
  align-items: center;
  justify-content: space-around;
`;
const P = styled.p`
  /* margin-left: 30%; */
  font-size: 25px;
  color: #fff;
  width: 60%;
  text-align: center;
  align-items: center;
`;

const Edit = styled.div`
  color: #fff;
  font-size: 30px;
  height: 38px;
  align-items: center;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    color: #f929f2;
  }
`;

function Todo({ setEditOpen }) {
  const [checked, setChecked] = useState(false);
  const handleClickChange = () => {
    setChecked(!checked);
  };
  const openModal = () => {
    setEditOpen((prev) => !prev);
  };
  return (
    <>
      <Div>
        {/* <CheckBox  /> */}
        <CheckBox
          checked={checked}
          checkBoxStyle={{
            checkedColor: "#34b93d",
            size: 25,
            unCheckedColor: "#b8b8b8",
            marginRight: "100px",
            height: "26px",
          }}
          duration={100}
          onClick={handleClickChange}
        />

        <P>aaaaaaa</P>
        <Edit>
          <AiFillEdit onClick={openModal} />
        </Edit>
      </Div>
      <Div>
        {/* <CheckBox  /> */}
        <CheckBox
          checked={checked}
          checkBoxStyle={{
            checkedColor: "#34b93d",
            size: 25,
            unCheckedColor: "#b8b8b8",
            marginRight: "100px",
            height: "26px",
          }}
          duration={100}
          onClick={handleClickChange}
        />

        <P>aaaaaaaaaaaaaaaaaaa</P>
        <Edit>
          <AiFillEdit />
        </Edit>
      </Div>
      <Div>
        {/* <CheckBox  /> */}
        <CheckBox
          checked={checked}
          checkBoxStyle={{
            checkedColor: "#34b93d",
            size: 25,
            unCheckedColor: "#b8b8b8",
            marginRight: "100px",
            height: "26px",
          }}
          duration={100}
          onClick={handleClickChange}
        />

        <P>aaaaaaa a</P>
        <Edit>
          <AiFillEdit />
        </Edit>
      </Div>
    </>
  );
}

export default Todo;

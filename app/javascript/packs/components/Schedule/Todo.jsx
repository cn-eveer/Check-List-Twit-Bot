import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux"
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
  const isSignedIn = useSelector((state) => state.userAuth.isSignedIn);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('api/v1/checklists.json')
    .then(resp => {
      console.log(resp.data);
      setItems(resp.data);
    })
    .catch(e => {
      console.log(e);
    })
  }, [])

  return (
    <>
      {items.map((item) =>
        <Div>
          <CheckBox
            checked={item.if_finish}
            checkBoxStyle={{
              checkedColor: "#34b93d",
              size: 25,
              unCheckedColor: "#b8b8b8",
              marginRight: "100px",
              height: "26px",
            }}
            duration={100}
          />
          <P>{item.title}</P>
        </Div>
      )}
    </>
  );
}

export default Todo;

import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import axios from "axios";

const Pyes = styled.p`
  width: 100%;
  background: #4fe641;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem;
  margin-right: 1rem;
  max-width: 80%;
  text-align: center;
  width: auto;
`;
const oniQ = styled.p`
  width: 100%;
  background: #d0f514;
  border-radius: 4px;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  padding: 0.5rem;
  margin-right: 1rem;
  max-width: 80%;
  text-align: center;
  width: auto;
`;
const Pno = styled.p`
  width: 100%;
  background: #f42a2a;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem;
  margin-right: 1rem;
  max-width: 80%;
  text-align: center;
  width: auto;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: "#221c1c",
  },
  oniFont: {
    fontSize: "30px",
  },

  answer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "0 !important",
  },
}));
function ChatItem({ item, option }) {
  const classes = useStyles();

  useEffect(() => {
    if(option != "" ){
      axios
        .post(
          "/api/v1/bot",
          {
            item: {
              id: item.id,
              answer: true,
            }
          }
      ).then(resp => {
        console.log("SENDED");
      }).catch(e => {
        console.log(e);
      })
    }
  }, [option])

  return (
    <>
      <div className={classes.wrapper}>
        <ListItem className={classes.oniQ}>
          <Pyes className={classes.oniFont}>
            {item.title}のタスクしましたか？
          </Pyes>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp"/>
          </ListItemAvatar>
        </ListItem>

        {option == "Yes" && (
          <ListItem >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"/>
            </ListItemAvatar>
            <Pyes>{option}</Pyes>
          </ListItem>
        )}
        {option == "No" && (
          <ListItem >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"/>
            </ListItemAvatar>
            <Pno>{option}</Pno>
          </ListItem>
        )}
      </div>
    </>
  );
}

export default ChatItem;

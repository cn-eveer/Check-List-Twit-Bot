import React,{ useState,useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import styled from "styled-components";
import ChatItem from "./ChatItem";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    margin: "0 auto",
    // backgroundColor: "#221c1c",
  },
}));

function ChatList({ text }) {
  const classes = useStyles();
  
  const [items,setItems] = useState([]);

  useEffect(() => {
    axios.get('api/v1/bot.json')
      .then(resp => {
        console.log(resp.data);
        setItems(resp.data);
      }).catch(e => {
        console.log(e);
      })
  }, [])

  return (
    <>
    {items.map((item) =>
      <List key={item.id} className={classes.root}>
        <ChatItem item={item} option={text}/>
      </List>
    )}
    </>
  );
}
export default ChatList;

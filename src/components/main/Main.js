import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";

import { v4 as uuid } from "uuid";
import Header from "../header/Header.js";
import Form from "../form/Form.js";
import List from "../list/List.js";
import Setting from "../../context/Setting.js";
import SettingsForm from "../settings-form/SettingsForm.js";
import { Container, Row, Col } from "react-bootstrap";
import "./main.scss";

import { SettingContext } from "../../context/Setting";

const Main = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    // console.log(item);

    item.id = uuid();
    item.complete = false;
    if (!item.difficulty) {
      item.difficulty = 3;
    }

    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Container id="container">
        <header id="sub-header">To Do List: {incomplete} items pending</header>

        <Row style={{ margin: "50px 0" }}>
          <Col sm={4}>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
            <SettingsForm />
          </Col>
          <Col sm={8}>
            <Setting>
              <List list={list} toggleComplete={toggleComplete} />
            </Setting>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;

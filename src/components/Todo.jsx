import React from "react";
import {
  Button,
  Container,
  Text,
  Title,
  Modal,
  TextInput,
  Group,
  Card,
  ActionIcon,
  Code,
  Checkbox,
} from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { IoMdMail, IoMdLock, IoMdTrash } from "react-icons/io";

import { useColorScheme } from "@mantine/hooks";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const taskTitle = useRef("");
  const taskComplete = useRef(true);

  function createTask() {
    if (taskTitle.current.value === "") return;
    else {
      setTasks([
        ...tasks,
        {
          title: taskTitle.current.value,
          complete: false,
        },
      ]);

      saveTasks([
        ...tasks,
        {
          title: taskTitle.current.value,
          complete: false,
        },
      ]);
    }
    taskTitle.current.value = "";
  }
  function completeTask(index) {
    var clonedTasks = [...tasks];

    clonedTasks[index].complete = !clonedTasks[index].complete;

    setTasks(clonedTasks);

    saveTasks([...clonedTasks]);
  }

  function deleteTask(index) {
    var clonedTasks = [...tasks];

    clonedTasks.splice(index, 1);

    setTasks(clonedTasks);

    saveTasks([...clonedTasks]);
  }

  function loadTasks() {
    let loadedTasks = localStorage.getItem("tasks");

    let tasks = JSON.parse(loadedTasks);

    if (tasks) {
      setTasks(tasks);
    }
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <Container size={550} my={40}>
        <Group position={"apart"}>
          <Title
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Todo List
          </Title>
        </Group>
        <div className="flex justify-between">
          <TextInput
            mt={"md"}
            ref={taskTitle}
            placeholder={"Task Title"}
            required
            className="mt-5 w-full mr-5"
          />
          <Button
            onClick={() => {
              createTask();
            }}
            fullWidth
            mt={"md"}
            className="mt-5 flex w-[6rem] justify-center rounded-md bg-[#539b33] hover:bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            Add Task
          </Button>
        </div>

        <hr className="mt-3" />
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            if (task.title) {
              return (
                <Card withBorder key={index} mt={"sm"}>
                  <Group position={"apart"}>
                    <Checkbox
                      defaultChecked={task.complete}
                      onChange={() => {
                        completeTask(index);
                      }}
                    />
                    <Text weight={"bold"} size={"lg"}>
                      {task.title}
                      <span className="text-gray-400 text-sm">
                        {task.complete ? " (Completed)" : ""}
                      </span>
                    </Text>
                    <ActionIcon
                      onClick={() => {
                        deleteTask(index);
                      }}
                      color={"red"}
                      variant={"transparent"}
                    >
                      <IoMdTrash size={22} />
                    </ActionIcon>
                  </Group>
                </Card>
              );
            }
          })
        ) : (
          <Text size={"lg"} mt={"md"} color={"dimmed"}>
            You have no tasks
          </Text>
        )}
      </Container>
    </div>
  );
}

export default Todo;

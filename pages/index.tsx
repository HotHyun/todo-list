import CreateButton from "@/src/components/interface/CreateButton";
import InputField from "@/src/components/interface/InputField";
import TableEmptyView from "@/src/components/interface/TableEmptyView";
import TaskCard from "@/src/components/interface/TaskCard";
import TaskTableHeader from "@/src/components/interface/TaskTableHeader";
import Header from "@/src/components/layout/Header";
import useTodoManager from "@/src/hooks/useTodoManager";
import { reverseArray } from "@/src/utils/common";
import { NextPage } from "next";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const {
    tasks,
    number,
    doneNumber,
    addTask,
    removeTask,
    updateTask,
    doneTask,
  } = useTodoManager();

  return (
    <div className="w-screen min-h-screen bg-gray-600">
      <Header />
      <div className="mx-auto w-[736px] -translate-y-[27px]">
        <div className="flex flex-row gap-2 mb-[64px]">
          <InputField
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="enter about your tasks: TODO"
          />
          <CreateButton
            onClick={() => {
              if (text === "") return;
              addTask(text);
              setText("");
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <TaskTableHeader number={number} doneNumber={doneNumber} />
          {tasks.length > 0 ? (
            reverseArray(tasks).map((task) => (
              <TaskCard
                key={task.id}
                text={task.text}
                isDone={task.isDone}
                onRemove={() => {
                  removeTask(task.id);
                }}
                onUpdate={(text) => {
                  updateTask(task.id, text);
                }}
                onDone={() => {
                  doneTask(task.id);
                }}
              />
            ))
          ) : (
            <TableEmptyView />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

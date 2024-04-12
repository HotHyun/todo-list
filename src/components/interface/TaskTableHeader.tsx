import { cn } from "@/src/utils/common";
import Numbering from "../atom/Nubmering";

interface TaskTableHeaderProps {
  number: number;
  doneNumber?: number;
}

interface LabelProps extends TaskTableHeaderProps {
  text: string;
  isDone?: boolean;
  textColor: string;
}

const Label: React.FC<LabelProps> = (props) => {
  const { text, number, isDone, doneNumber, textColor } = props;

  return (
    <div className="flex gap-2">
      <span className={cn("font-[Inter] font-bold text-[14px]", textColor)}>
        {text}
      </span>
      <Numbering number={number} isDone={isDone} doneNumber={doneNumber} />
    </div>
  );
};

const TaskTableHeader: React.FC<TaskTableHeaderProps> = (props) => {
  const { number, doneNumber } = props;

  return (
    <div className="flex justify-between w-full">
      <Label
        text="Created Tasks"
        number={number}
        textColor="text-blue"
        isDone={false}
      />
      <Label
        text="Done"
        number={number}
        isDone={true}
        doneNumber={doneNumber}
        textColor="text-purple"
      />
    </div>
  );
};

export default TaskTableHeader;

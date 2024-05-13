import "./TaskCard.css";

interface Props {
  value: string;
  id: number;
  onChange(id: number): void;
}

function TaskCard(props: Props) {
  const handleChange = () => {
    props.onChange(props.id);
  };

  return (
    <div className="card">
      <input
        type="checkbox"
        id={props.id.toString()}
        onChange={handleChange}
      />
      <label htmlFor={props.id.toString()}>
        {props.value}
      </label>
    </div>
  );
}

export default TaskCard;
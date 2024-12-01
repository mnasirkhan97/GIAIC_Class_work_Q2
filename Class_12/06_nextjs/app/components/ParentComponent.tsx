import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  let name = "Nasir";

  return (
    <div className="mt-10">
      <ChildComponent name={name} />
    </div>
  );
};

export default ParentComponent;

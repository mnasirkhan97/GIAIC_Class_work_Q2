import React from "react";

function DynamicPage(props: any) {
  console.log("props => :", props);
  return (
    <div>
      <h1>Dynamic route</h1>
      <h1 className="text-2xl">{props.params.id}</h1>
    </div>
  );
}

export default DynamicPage;

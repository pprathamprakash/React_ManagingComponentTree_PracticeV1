import React from "react";

function InputArea(props) {
  // return (
  //   <div className="form">
  //     <input onChange={props.onTyped} type="text" value={props.value} />
  //     <button onClick={props.onClicked}>
  //       <span>Add</span>
  //     </button>
  //   </div>
  // );

  return (
    <div className="form">
      <input onChange={props.onTyped} type="text" value={props.value} />
      <button onClick={props.onClicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

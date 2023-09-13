import React, { forwardRef, useRef } from "react";

const MyInput = forwardRef((ref, props) => {
  return <input type="text" {...props} ref={ref} />;
});
const AccederOtrosNODOSComp = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Acceder a losNODOS de otros Componentes</h1>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

export default AccederOtrosNODOSComp;

import React, { useEffect, useRef } from "react";

function ReactUseRef() {
  const spanRef = useRef(); //initialize
  let salary = 50000;
  useEffect(() => {
    setTimeout(() => {
      // way 1------
      //   document.getElementById("salary").innerHTML = 40000;
      // ----------------
      // way 2
      console.log(spanRef);
      spanRef.current.innerHTML = 40000;
    }, 3000);
  });
  return (
    <div>
      salary is{" "}
      <span id="salary" ref={spanRef}>
        {salary}
      </span>
    </div>
  );
}

export default ReactUseRef;

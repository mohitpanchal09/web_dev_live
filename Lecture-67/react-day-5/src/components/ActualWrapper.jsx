import React from "react";

function ActualWrapper({ children }) {
  return (
    <div>
      <h1>Actual wrapper</h1>
      {children}
    </div>
  );
}

export function ChildWrapper({ children }) {
  return <>{children}</>;
}

export default ActualWrapper;

import React from "react";

function Container({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 90%;
          max-width: 1220px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}

export default Container;

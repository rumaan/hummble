export default function Container({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 96%;
          max-width: 1220px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}


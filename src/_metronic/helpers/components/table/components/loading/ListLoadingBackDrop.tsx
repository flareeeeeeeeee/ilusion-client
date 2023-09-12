const LoadingBackDrop = () => {
  const styles = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "999",
    backgroundColor: "rgba(0,0,0,0.2)",
  };

  return (
    <div id="backdrop" style={{ ...styles, position: "absolute", cursor: "wait" }}>
      <div
        className="text-center loading"
        style={{
          width: "100%",
          position: "relative",
          height: "100%",
        }}
      >
        <div
          className="spinner-border"
          role="status"
          style={{
            display: "block",
            position: "fixed",
            top: "calc(50% - (58px / 2))",
            right: "calc(50% - (58px / 2))",
          }}
        >
        </div>
      </div>
    </div>
  );
};

export { LoadingBackDrop };

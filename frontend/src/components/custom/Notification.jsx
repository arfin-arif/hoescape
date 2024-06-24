const Notification = () => {
  return (
    <div
      style={{
        width: "17px",
        height: "17px",
        backgroundColor: "#F84233",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "15px",
        top: "33%",
      }}
    >
      <span
        className="jakarta"
        style={{ fontSize: "11px", color: "#fff", fontWeight: "600" }}
      >
        5
      </span>
    </div>
  );
};

export default Notification;

import "./styles.css";

export const Car = ({ paused }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "20px",
      }}
    >
      <div
        className={`car-moving ${paused ? "car-moving-paused" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "20px",
            borderTopLeftRadius: 60,
            borderTopRightRadius: 100,
            backgroundColor: "grey",
          }}
        />
        <div
          className="Chassi"
          style={{ width: "100px", height: "30px", backgroundColor: "black" }}
        ></div>
        <div
          className="roda"
          style={{ display: "flex", flexDirection: "row", gap: 40, padding: 2 }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

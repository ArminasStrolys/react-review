import React from "react";

const nick = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
];

export default function Box() {
  return (
    <>
      {nick.map((e) => {
        return (
          <div
            style={{
              height: "100px",
              width: "25%",
              backgroundColor: "tomato",
              float: "left",
              border: "1px solid white",
              boxSizing: "border-box",
              textAlign: "center",
              paddingTop: "40px",
            }}
          >
            {e}
          </div>
        );
      })}
    </>
  );
}

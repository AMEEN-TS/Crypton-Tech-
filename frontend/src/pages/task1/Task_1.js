import React from "react";
import "./style.scss";
export default function Task_1() {
  const data = [
    {
      name: "Revenue",
      percentage: "10",
      img: "../../profile men2.jpg",
      amount: 2.047,
      status: "down",
    },
    {
      name: "Orders",
      percentage: "20",
      img: "../../profile men2.jpg",
      amount: 356,
      status: "up",
    },
    {
      name: "Dine in",
      percentage: "10",
      img: "../../profile men2.jpg",
      amount: 220,
      status: "up",
    },
    {
      name: "Take away",
      percentage: "5",
      img: "../../profile men2.jpg",
      amount: 135,
      status: "down",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        {data.map((item, index) => {
          return (
            <div className="order_wrapper">
              <div className="header_part">
                <h1>{item.name}</h1>
                <h2 className={item.status == "down" ? "red" : "green"}>
                  {item.status == "down"
                    ? `-${item.percentage}%`
                    : `+${item.percentage}%`}
                </h2>
              </div>
              <div className="mid_part">
                <div className="icon">
                  <img src={item.img} alt="" width={50} />
                </div>
                <div className="amount">
                  <h1>
                    {item.name == "Revenue"
                      ? `$${item.amount}`
                      : `${item.amount}`}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

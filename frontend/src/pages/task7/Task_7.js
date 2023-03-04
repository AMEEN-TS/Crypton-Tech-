import React from "react";
import "./style.scss";
import img1 from "../../img/profile girl.jpeg"
import img2 from "../../img/profile girl3.jpg"
import img3 from "../../img/profile men.jpeg"
import img4 from "../../img/profile men2.jpg"


const received = {
    color:"limegreen"
}

const outgoing = {
    color:"red"
}

function Task_7() {

    const data = [
        {
            name:'Aokiji',
            date:'28 Feb 2023',
            time:'06:23 PM',
            amount:'$13.00',
            type:'Received',
            image:img1
        },
        {
            name:'Kizaru',
            date:'28 Feb 2023',
            time:'06:23 PM',
            amount:'$9.00',
            type:'Outgoing',
            image:img2
        },
        {
            name:'Akainu',
            date:'28 Feb 2023',
            time:'06:23 PM',
            amount:'$20.00',
            type:'Received',
            image:img3
        },
        {
            name:'Shahir',
            date:'28 Feb 2023',
            time:'06:23 PM',
            amount:'$10.00',
            type:'Outgoing',
            image:img4
        },
    ]

  return (
    <>
      <div className="grid">
        <div className="header-part">
          <h1>Last Transactions</h1>
          <span>See All</span>
        </div>
        {data.map((obj)=>{
           return (
            <div className="box">
            <div className="img-area">
              <img src={obj.image} alt="profile" />
            </div>
            <div className="user-maindiv">
            <div className="user-dtls">
              <div>{obj.name}</div>
              <div className="date-time">
                <span>{obj.date}</span>
                <span>{obj.time}</span>
              </div>
            </div>
            <div className="amount-dtls">
              <div style={obj.type === 'Received' ? received : outgoing} className="amount">
                {obj.type === 'Received' ? '+' : '-'}
                {obj.amount}
                </div>
              <div>{obj.type}</div>
            </div>
          </div>
            </div>
           )
        })}
      </div>
    </>
  );
}

export default Task_7;
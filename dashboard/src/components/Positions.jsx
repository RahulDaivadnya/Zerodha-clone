// import { positions } from "../data/data.js";
import { useState, useEffect } from "react";
import axios from "axios";
const Positions = () => {

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () =>{
      try{
          const response = await axios.get("http://localhost:3000/api/positions");
          console.log(response);
          setPositions(response.data.positions);
      }catch(error){
          console.error("Error fetching positions:", error);
      }
    }

     fetchPositions();
  },[]);
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
            <th>Day chg.</th>
          </tr>
          {positions.map((positions,index)=>{
            const curValue = positions.qty * positions.price;
            const isProfit =  curValue - positions.qty * positions.avg >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = positions.isLoss ? "loss" : "profit";
            return(
              <tr key={index}>
                <td>{positions.product}</td>
                <td>{positions.name}</td>
                <td>{positions.qty}</td>
                <td>{positions.avg}</td>
                <td>{positions.price}</td>
                <td className={profClass}>{(curValue - positions.qty * positions.avg).toFixed(2)}</td>
                <td className={profClass}>{positions.net}</td>
                <td className={dayClass}>{positions.day}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
import { watchlist } from "../data/data.js";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext.jsx";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((item, index) => {
          return <WatchListItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ item }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  const { name, price, percent, isDown } = item;

  const downClass = isDown ? "down" : "up";

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={isDown ? "down" : "up"}>{name}</p>
        <div className="itemInfo">
          <spam className="percent">{percent}</spam>
          {item.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <spam className={"price " + downClass}>{price}</spam>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button onClick={() => openBuyWindow(uid)} className="buy">
            B
          </button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">S</button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
          <button className="chart">
            <i class="fa fa-line-chart" aria-hidden="true"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="chart">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

import React from "react";
import PlayerCard from "./PlayerCard";
import { Players } from "../data/PlayerData";
import styles from "./PlayerList.module.css";

const PlayerList: React.FC = () => {
  return (
    <div className={styles.playerList}>
      <ul>
        {Players.map((player) => (
          <li key={player.id}>
            <PlayerCard player={player}></PlayerCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;

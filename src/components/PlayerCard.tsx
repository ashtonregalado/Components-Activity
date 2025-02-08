import React from "react";
import styles from "./PlayerCard.module.css";

type stats = {
  PPG: number;
  RPG: number;
  APG: number;
};

export interface Player {
  id: number;
  name: string;
  number: number;
  age: number;
  position: string;
  team: string;
  image: string;
  stats: stats;
}

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <div className={styles.playerCard}>
      <div className={styles.imageContainer}>
        <img
          src={player.image}
          alt={player.name}
          className={styles.playerImage}
        ></img>
      </div>
      <div>
        <div className={styles.teamInfo}>
          <p className={styles.playerTeam}>{player.team}</p>
          <p>|</p>
          <p className={styles.playerJerseyNumber}>#{player.number}</p>
          <p>|</p>
          <p className={styles.playerPosition}>{player.position}</p>
        </div>
        <p className={styles.playerName}>{player.name}</p>
        <p className={styles.playerAge}>Age: {player.age}</p>

        <div className={styles.statsInfo}>
          <div className={styles.average}>
            <p className={styles.breakText}>{"PPG\n" + player.stats.PPG}</p>
          </div>
          <div className={styles.average}>
            <p className={styles.breakText}>{"RPG\n" + player.stats.RPG}</p>
          </div>
          <div className={styles.APG}>
            <p className={styles.breakText}>{"APG\n" + player.stats.APG}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

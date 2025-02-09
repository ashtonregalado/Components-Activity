import React, { useState } from "react";
import styles from "./PlayerCard.module.css";
import { Player } from "../data/PlayerInfo";

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className={styles.playerCard}>
      <div className={styles.imageContainer}>
        <img
          src={player.image}
          alt={player.name}
          className={styles.playerImage}
        />
      </div>
      <div className={styles.playerInfo}>
        <div className={styles.teamInfo}>
          <p className={styles.playerTeam}>{player.team}</p>
          <p>|</p>
          <p className={styles.playerJerseyNumber}>#{player.number}</p>
          <p>|</p>
          <p className={styles.playerPosition}>{player.position}</p>
        </div>

        <p className={styles.playerName}>{player.name}</p>
        <p className={styles.playerAge}>Age: {player.age}</p>

        {/* Dropdown Button */}
        <span
          className={styles.clickableText}
          onClick={() => setShowStats(!showStats)}
        >
          {showStats ? "Hide Stats" : "See Stats"}
        </span>

        {/* Dropdown Content */}
        {showStats && (
          <div className={styles.statsInfo}>
            <div className={styles.average}>
              <p className={styles.breakText}>
                <span>PPG</span>
                <br />
                <span>{player.stats.PPG}</span>
              </p>
            </div>
            <div className={styles.average}>
              <p className={styles.breakText}>
                <span>RPG</span>
                <br />
                <span>{player.stats.RPG}</span>
              </p>
            </div>
            <div className={styles.APG}>
              <p className={styles.breakText}>
                <span>APG</span>
                <br />
                <span>{player.stats.APG}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;

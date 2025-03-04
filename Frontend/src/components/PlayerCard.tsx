import React, { useEffect, useState } from "react";
import styles from "./PlayerCard.module.css";
import { Player } from "../data/PlayerInfo";

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  const [showStats, setShowStats] = useState(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const message = await fetch(`http://localhost:3000/api/v1/get`);
        const data = await message.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("Failed to fetch message");
      }
    };

    fetchMessage();
  }, []);

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
        <p className={styles.playerAge}>Age: {player.age} years</p>
        <p className={styles.playerAge}>Message: {message}</p>

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

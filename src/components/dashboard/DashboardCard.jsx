import { useState } from "react";
import styles from "./DashboardCard.module.scss";
import userImage from "../../assets/image/user.svg";
import heart from "../../assets/image/heart.png";

const DashboardCard = ({ users }) => {
  const [currentUser, setCurrentUser] = useState(0);

  const currentUserHandler = () => {
    setCurrentUser((prevState) => {
      if (prevState === users.length - 1) return 0;
      return prevState + 1;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboardContainer}>
        <h2 className={styles.name}>{users[currentUser].profile.name}</h2>
        <div className={styles.imgContainer}>
          <img src={userImage} alt="user" className={styles.img} />
        </div>
        <span className={styles.info}>
          {users[currentUser].profile.age}år från{" "}
          {users[currentUser].profile.location}
        </span>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={currentUserHandler}>
          No
        </button>
        <button className={styles.btn}>
          <img
            src={heart}
            alt="yes"
            className={styles.btnImg}
            onClick={currentUserHandler}
          />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;

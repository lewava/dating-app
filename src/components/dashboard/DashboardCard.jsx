import userImage from "../../assets/image/user.svg";
import styles from "./DashboardCard.module.scss";

const DashboardCard = () => {
  return (
    <div className={styles.container}>
      <h3>Namn</h3>
      <div className={styles.imgContainer}>
        <img src={userImage} alt="user" className={styles.img} />
        <span>40år from stockholm</span>
      </div>
    </div>
  );
};

export default DashboardCard;

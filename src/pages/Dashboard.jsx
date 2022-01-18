import DashboardCard from "../components/dashboard/DashboardCard";

import styles from "../styles/Dashboard.module.scss";

const Dashboard = () => {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const users = JSON.parse(localStorage.getItem("users"));

  const filteredUsers = users.filter((user) => user.email !== activeUser.email);

  return (
    <div className={styles.container}>
      <DashboardCard users={filteredUsers} />
    </div>
  );
};

export default Dashboard;

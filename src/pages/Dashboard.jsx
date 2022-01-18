import DashboardCard from "../components/dashboard/DashboardCard";

import styles from "../styles/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <DashboardCard />
    </div>
  );
};

export default Dashboard;

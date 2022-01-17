import CreateUser from "../components/CreateUser";
import EditUser from "../components/EditUser";

const User = () => {
	const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  return (
    <div>
				{activeUser ? <EditUser activeUser={activeUser} /> : <CreateUser />}
    </div>
	);
}

export default User;
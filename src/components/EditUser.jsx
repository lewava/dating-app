import { useNavigate } from 'react-router-dom';
import './edit-user.scss';

const EditUser = ({ activeUser }) => {
	const navigate = useNavigate();

	function editAccount(e) {
		e.preventDefault();
		
		const userEmail = e.target[0].value;
		const password = e.target[1].value;

		const editedUser = {
			email: userEmail,
			password: password,
			profile: activeUser.profile
		}

		let currentUsers = JSON.parse(localStorage.getItem("users"));

		currentUsers.splice(currentUsers.findIndex(currentUser => currentUser === activeUser), 1);

		currentUsers.push(editedUser);

		localStorage.setItem("activeUser", JSON.stringify(editedUser));
		localStorage.setItem("users", JSON.stringify(currentUsers));

		navigate('/profile');
	}

	function deleteAccount() {
		let currentUsers = JSON.parse(localStorage.getItem("users"));

		currentUsers.splice(currentUsers.findIndex(currentUser => currentUser === activeUser), 1);
		localStorage.setItem("users", JSON.stringify(currentUsers));
		localStorage.removeItem("activeUser");
		navigate('/');
	}

	return (
		<section className="edit-user-wrapper">
			<h2>Redigera konto</h2>
			<form onSubmit={editAccount}>
				<p>Nuvarande mail: {activeUser.email}</p>
				<label htmlFor="new-email">Ny email: </label>
				<input type="text" name="new-email"/>
				<p>Nuvarande lösenord: {activeUser.password}</p>	
				<label htmlFor="new-password">Nytt Lösenord: </label>
				<input type="text" name="new-password" />
				<input type="submit" value={"Ändra uppgifter"} />
			</form>

			<button className='delete-button' onClick={deleteAccount}>Radera konto</button>
		</section>
	);
}

export default EditUser;
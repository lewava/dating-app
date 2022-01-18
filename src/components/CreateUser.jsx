import { useNavigate } from 'react-router-dom';
import './create-user.scss';

const CreateUser = () => {
	const navigate = useNavigate();

	function createAccount(e) {
		e.preventDefault();

		const userEmail = e.target[0].value;
		const password = e.target[1].value;

		const newUser = {
			email: userEmail,
			password: password,
      profile: {
        name: "",
        age: 0,
        interest: "",
        location: ""
      }
		}

		let currentUsers = JSON.parse(localStorage.getItem("users"));

		currentUsers.push(newUser);

		localStorage.setItem("users", JSON.stringify(currentUsers));

		navigate('/login');
	}

	return (
		<section className='create-user-wrapper'>
			<h2>Skapa Konto</h2>
			<form onSubmit={createAccount}>
				<label htmlFor="user-email">E-mail</label>
				<input type="text" name="user-email" />
				<label htmlFor="password">Lösenord</label>
				<input type="password" name="password" />
				<input type="submit" name="create" value={"Skapa konto"} />
			</form>
		</section>
	);
}

export default CreateUser;
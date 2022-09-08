import {IUserForm} from "../types/types";
import axios from "axios";


const URL: string | undefined = process.env["REACT_APP_API_URL"];
const TOKEN: string | undefined = process.env["REACT_APP_AUTH_TOKEN"];


const addUser = async (userForm: IUserForm): Promise<void> => {
	if (URL && TOKEN) {
		try {
			const {data} = await axios.post<IUserForm>(
				URL,
				userForm,
				{
					headers: {
						'Authorize': TOKEN
					},
				},
			);
			console.log(JSON.stringify(data, null, 4));
		} catch (err) {
			if (axios.isAxiosError(err)) {
				console.log('error message: ', err.message);
			} else {
				console.log('unexpected error: ', err);
			}
		}
	} else {
		console.log("Please add .env file with fields REACT_APP_API_URL and REACT_APP_AUTH_TOKEN on the project root");
	}
};


export default addUser;
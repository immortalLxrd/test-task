import {IUserForm} from "../types/types";
import axios from "axios";


const URL: string | undefined = process.env["API_URL"];
const TOKEN: string | undefined = process.env["AUTH_TOKEN"];


export default async function addUser(userForm: IUserForm) {
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
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				return error.message;
			} else {
				console.log('unexpected error: ', error);
				return 'An unexpected error occurred';
			}
		}
	}
}
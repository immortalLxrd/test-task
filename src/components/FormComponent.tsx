import React, {useReducer} from 'react';
import Dropdown from "./UI/Dropdown/Dropdown";
import plusIcon from "../assets/icons/plus.svg"
import closeIcon from "../assets/icons/close.svg"
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import DropdownItem from "./UI/Dropdown/DropdownItem";
import {formActions, formReducer} from "../reducers/formReducer";

type FormComponentProps = {
	action: (args: any) => void
};

interface IUserForm {
	userPhoneNumber: string | null,
	userName: string | null,
	lastName: string | null,
	email: string | null,
	workplace: string | null,
	lang: string | null,
	profession: string | null,
	idRole: string
};

const userForm: IUserForm = {
	userPhoneNumber: null,
	userName: null,
	lastName: null,
	email: null,
	workplace: null,
	lang: null,
	profession: null,
	idRole: "de9b62b2-1ba9-4393-b191-efb19e05b22e"
};

const FormComponent: React.FC<FormComponentProps> = ({action}) => {
	const [values, dispatch] = useReducer(formReducer, userForm);

	const handleChange = (e: any) => {
		dispatch({
			type: formActions.CHANGE_INPUT,
			payload: {name: e.target.name, value: e.target.value}
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		action({
				...values
			}
		);
	};

	return (
		<div className="form">
			<div className="form__heading">
				<img className="form__icon plus-icon" src={plusIcon} alt=""/>
				<h2 className="form__title">Додати користувача</h2>
				<img className="form__icon close-icon" src={closeIcon} alt=""/>
			</div>
			<form
				className="form__content"
				onSubmit={handleSubmit}
			>
				<label>
					<p className="label-text">Ім’я</p>
					<Input onChange={handleChange} placeholder="Марина" type="text" name="userName"/>
				</label>
				<label>
					<p className="label-text">Прізвище</p>
					<Input placeholder="Коноваленко" type="text" name="lastName"/>
				</label>
				<label>
					<p className="label-text">Телефон</p>
					<Input tel placeholder="1 (999) 999-9999" type="text" name="userPhoneNumber"/>
				</label>
				<label>
					<p className="label-text">Email</p>
					<Input placeholder="example.com" type="text" name="email"/>
				</label>
				<label htmlFor="">
					<p className="label-text">Група користувачів</p>
					<Dropdown initialValue="Оберіть групу">
						<DropdownItem value={1}>1</DropdownItem>
						<DropdownItem value={2}>2</DropdownItem>
						<DropdownItem value={3}>3</DropdownItem>
						<DropdownItem value={4}>4</DropdownItem>
					</Dropdown>
				</label>
				<label htmlFor="">
					<p className="label-text">Мова</p>
					<Dropdown initialValue="Оберіть мову" radio name="lang">
						<DropdownItem value={'EN'}>Англійська</DropdownItem>
						<DropdownItem value={'UA'}>Українська</DropdownItem>
						<DropdownItem value={'DE'}>Німецька</DropdownItem>
						<DropdownItem value={'FR'}>Французька</DropdownItem>
					</Dropdown>
				</label>
				<label htmlFor="">
					<p className="label-text">Додати нове поле</p>
					<Dropdown initialValue="Оберіть поле">
						<DropdownItem value={1}>Місце роботи</DropdownItem>
						<DropdownItem value={2}>Професія</DropdownItem>
						<DropdownItem value={3}>Вік</DropdownItem>
						<DropdownItem value={4}>Дата народження</DropdownItem>
					</Dropdown>
				</label>
				<label>
					<p className="label-text">Значення поля</p>
					<Input placeholder="Введіть значення" type="text" name="profession"/>
				</label>
				<div className="form__bottom">
					<a
						href="#"
						onClick={e => e.preventDefault()}
					>
						Додати поле
					</a>
					<Button type="submit">
						Додати користувача
					</Button>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;
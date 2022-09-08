import React, {useReducer} from 'react';
import Select from "./UI/Select/Select";
import plusIcon from "../assets/icons/plus.svg"
import closeIcon from "../assets/icons/close.svg"
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import SelectItem from "./UI/Select/SelectItem";
import {formActions, formReducer} from "../reducers/formReducer";
import {IUserForm} from "../types/types";


type FormComponentProps = {
	action: Function
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
			type: formActions.CHANGE,
			payload: {name: e.target.name, value: e.target.value}
		});
	};

	const handleDropdownChange = (name: string, value: string | number) => {
		dispatch({
			type: formActions.CHANGE,
			payload: {name: name, value: value}
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
					<Input
						name="userName"
						onChange={handleChange}
						placeholder="Марина"
						type="text"
						required
					/>
				</label>
				<label>
					<p className="label-text">Прізвище</p>
					<Input
						name="lastName"
						onChange={handleChange}
						placeholder="Коноваленко"
						type="text"
						required
					/>
				</label>
				<label>
					<p className="label-text">Телефон</p>
					<Input
						name="userPhoneNumber"
						onChange={handleChange}
						placeholder="1 (999) 999-9999"
						type="number"
						tel
						required
					/>
				</label>
				<label>
					<p className="label-text">Email</p>
					<Input
						name="email"
						onChange={handleChange}
						placeholder="example.com"
						type="text"
						required
					/>
				</label>
				<label htmlFor="">
					<p className="label-text">Група користувачів</p>
					<Select
						name="workplace"
						onChange={handleDropdownChange}
						initialValue="Оберіть групу"
					>
						<SelectItem value={1}>1</SelectItem>
						<SelectItem value={2}>2</SelectItem>
						<SelectItem value={3}>3</SelectItem>
						<SelectItem value={4}>4</SelectItem>
					</Select>
				</label>
				<label htmlFor="">
					<p className="label-text">Мова</p>
					<Select
						name="lang"
						onChange={handleDropdownChange}
						initialValue="Оберіть мову"
						radio
					>
						<SelectItem value={'EN'}>Англійська</SelectItem>
						<SelectItem value={'UA'}>Українська</SelectItem>
						<SelectItem value={'DE'}>Німецька</SelectItem>
						<SelectItem value={'FR'}>Французька</SelectItem>
					</Select>
				</label>
				<label htmlFor="">
					<p className="label-text">Додати нове поле</p>
					<Select initialValue="Оберіть поле">
						<SelectItem value={"work"}>Місце роботи</SelectItem>
						<SelectItem value={"profession"}>Професія</SelectItem>
						<SelectItem value={"age"}>Вік</SelectItem>
						<SelectItem value={"birthdate"}>Дата народження</SelectItem>
					</Select>
				</label>
				<label>
					<p className="label-text">Значення поля</p>
					<Input
						name="profession"
						onChange={handleChange}
						placeholder="Введіть значення"
						type="text"
						required
					/>
				</label>
				<div className="form__bottom">
					<div
						className="add-btn"
						onClick={e => e.preventDefault()}
					>
						Додати поле
					</div>
					<Button type="submit">
						Додати користувача
					</Button>
				</div>
			</form>
		</div>
	);
};


export default FormComponent;
import React, {useState} from 'react';
import Select from "./UI/Select/Select";
import SelectItem from "./UI/Select/SelectItem";
import Input from "./UI/Input/Input";

const FormGroupComponent: React.FC<any> = ({onChange}) => {
	const [name, setName] = useState('');

	return (
		<>
			<label>
				<p className="label-text">Додати нове поле</p>
				<Select
					initialValue="Оберіть поле"
					onChangeValue={setName}
				>
					<SelectItem value={"work"}>Місце роботи</SelectItem>
					<SelectItem value={"profession"}>Професія</SelectItem>
					<SelectItem value={"age"}>Вік</SelectItem>
					<SelectItem value={"birthdate"}>Дата народження</SelectItem>
				</Select>
			</label>
			<label>
				<p className="label-text">Значення поля</p>
				<Input
					name={name && name}
					onChange={onChange}
					placeholder="Введіть значення"
					type="text"
					required
				/>
			</label>
		</>
	);
};

export default FormGroupComponent;
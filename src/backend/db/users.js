import {v4 as uuid} from "uuid";
import {formatDate} from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika",
		password: "adarshBalika123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "admin",
		lastName: "admin",
		email: "test@gmail.com",
		password: "12345",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];

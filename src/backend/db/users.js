import {v4 as uuid} from "uuid";
import {formatDate} from "../utils/authUtils";
import {
	avatar,
	avatar1,
	avatar2,
	avatar3,
	avatar4,
} from "../../Assests/AvatarImages";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika@gmail.com",
		password: "adarshBalika123",
		userHandler: "adarsha123",
		bio: "neoG Web Developer",
		profilePic: avatar,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Admin",
		lastName: "admin",
		username: "test@gmail.com",
		password: "12345",
		userHandler: "test123",
		bio: "neoG Web Developer",
		profilePic: avatar1,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Andrej",
		lastName: "andrej",
		username: "andrej@gmail.com",
		password: "12345",
		userHandler: "react_dudu",
		bio: "Web Developer",
		profilePic: avatar2,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Tawanda",
		lastName: "tawanda",
		username: "tawanda@gmail.com",
		password: "12345",
		userHandler: "tower",
		bio: "Full stack Developer",
		profilePic: avatar3,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Sabrina",
		lastName: "sabrina",
		username: "sabrina@gmail.com",
		password: "12345",
		userHandler: "notbot",
		bio: "neoG Web Developer",
		profilePic: avatar4,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Santhosh",
		lastName: "santhosh",
		username: "santhosh@gmail.com",
		password: "12345",
		userHandler: "neog",
		bio: "neoG Web Developer",
		profilePic: avatar4,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Dunyan",
		lastName: "dunyan",
		username: "dunyan@gmail.com",
		password: "12345",
		userHandler: "dun_yan_",
		bio: "neoG Web Developer",
		profilePic: avatar4,
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];

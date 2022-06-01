import {v4 as uuid} from "uuid";
import {formatDate} from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: "Neog Bootcamp best course for web development",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "test@gmail.com",
		bookmark: [],
		comments: [
			{
				_id: uuid(),
				username: "andrej@gmail.com",
				text: "One best course for front end developer",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tawanda@gmail.com",
				text: "Good resource",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sabrina@gmail.com",
				text: "Best Course",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"Learning JavaScript is like running, some are fast and some are slow",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "sabrina@gmail.com",
		bookmark: [],
		comments: [
			{
				_id: uuid(),
				username: "santhosh@gmail.com",
				text: "It's not competition, learn at your own pace. You gonna be fine",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Which is your favourite social media platform and why?",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "tawanda@gmail.com",
		bookmark: [],
		comments: [
			{
				_id: uuid(),
				username: "sabrina@gmail.com",
				text: "Twitter",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Which is your favourite frond end framework and why?",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "andrej@gmail.com",
		bookmark: [],
		comments: [
			{
				_id: uuid(),
				username: "santhosh@gmail.com",
				text: "ReactJs, Easy to learn",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"YouTube is the biggest university in history and Twitter is its study room",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "test@gmail.com",
		bookmark: [],
		comments: [],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "i wonder if 'console.log' the most written javascirpt line",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "andrej@gmail.com",
		bookmark: [],
		comments: [],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"Working in a startup is like participating in a hackthon every day",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "sabrina@gmail.com",
		bookmark: [],
		comments: [],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "What is first line write in javascript",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dunyan@gmail.com",
		bookmark: [],
		comments: [
			{
				_id: uuid(),
				username: "santhosh@gmail.com",
				text: "console.log('Hello World')",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "What is first line write in javascript",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dunyan@gmail.com",
		bookmark: [],
		comments: [
			{
				_id: uuid(),
				username: "santhosh@gmail.com",
				text: "console.log('Hello World')",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: "2022-05-14T10:38:12+05:30",
		updatedAt: formatDate(),
	},
];

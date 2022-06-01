import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import SinglePost from "../MainPage/SubComponents/SinglePost";
import "./BookmarkPost.scss";

const BookmarkPost = () => {
	const {allPosts} = useSelector((store) => store.post);
	const {user} = useSelector((store) => store.auth);
	const [bookmark, setBookmark] = useState(allPosts?.posts);

	useEffect(() => {
		setBookmark(
			allPosts?.posts?.filter(
				(post) =>
					post.bookmark.some(
						(bookmark) => bookmark.username === user.username
					) === true
			)
		);
	}, [allPosts]);

	return (
		<div className='book-component'>
			<label className='bookmark-page-heading'>Namaste</label>
			{bookmark && bookmark?.length > 0 ? (
				bookmark?.map((post) => <SinglePost key={post._id} post={post} />)
			) : (
				<div className='no-bookmark'>
					<p>No Bookmarks Yet</p>
				</div>
			)}
		</div>
	);
};

export default BookmarkPost;

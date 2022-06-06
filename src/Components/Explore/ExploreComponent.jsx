import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import SinglePost from "../MainPage/SubComponents/SinglePost";
import "./ExploreComponent.scss";

const ExploreComponent = () => {
	const {allPosts} = useSelector((store) => store.post);
	const [explorePost, setexplorePost] = useState([]);
	useEffect(() => {
		const exlporeposts = allPosts?.posts?.slice(-5);
		setexplorePost(exlporeposts);
	}, [allPosts]);

	return (
		<div className='explore-component'>
			<label className='explore-page-heading'>Namaste</label>
			{explorePost && explorePost?.length > 0 ? (
				explorePost?.map((post) => <SinglePost key={post._id} post={post} />)
			) : (
				<div className='no-explorepost'>
					<p>No Explore posts Yet</p>
				</div>
			)}
		</div>
	);
};

export default ExploreComponent;

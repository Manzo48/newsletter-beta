import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {  fetchPosts } from "../../store/PostSlice";
import { RootState, AppDispatch } from "../../app/store";
import FormComments from "../../components/Comments-Form/FormComments";
import CommentList from "../../components/Comments-Form/Comments";
import style from "./FullPostPage.module.css"
function FullPost() {
  const { postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  // Селектор для выборки поста по его ID из Redux store
  const posts = useSelector((state: RootState) => state.postReducer.posts);

  useEffect(() => {
    try {
      dispatch(fetchPosts());
    } catch (error) {
      console.error("An error occurred while fetching the post:", error);
    }
  }, [dispatch, postId]);

  if (!posts) {
    console.error("Post not found for postId:", postId);
    return (
      <div>
        <p>Error: Post not found</p>
      </div>
    );
  }
  console.log(posts)
  return (
    <div>
      <div>
        {posts.map((singlePost) => (
          singlePost._id === postId && (
          <div className={style.container} key={singlePost._id}>
            <h2 className={style.title}>{singlePost.title}</h2>
            <p className={style.text}>{singlePost.text}</p>
            <img className={style.img} src={singlePost.imageURL} alt="Post" />
          </div>
        )))}
      </div>
      <CommentList postId={postId} />
      <FormComments postId={postId} />
    </div>
  );
}

export default FullPost;

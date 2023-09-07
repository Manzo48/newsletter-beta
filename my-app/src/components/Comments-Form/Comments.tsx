import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { fetchComments } from "../../store/CommentSlice";
import style from './CommentList.module.css'

function CommentList({ postId }) {
  const dispatch = useDispatch<AppDispatch>();

  // Используем селектор для получения комментариев из Redux store
  const comments = useSelector((state: RootState) => state.commentReducer.comments);
  const email = useSelector((state: RootState) => state.authReducer.users)

  useEffect(() => {
    // Загружаем комментарии для указанного поста при монтировании компонента
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className={style["comment-list"]}>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          // Проверяем, соответствует ли postId комментария postId страницы поста
          comment.post === postId && (
            <li className={style.comment} key={comment._id}>
              <div className={style["comment-avatar"]}>
                {/* <img src={comment.avatarURL} alt={`Avatar of ${comment.user}`} /> */}
              </div>
              <div className={style["comment-content"]}>
                <div className={style["comment-username"]}>
                  <strong>{comment.user.email}</strong>
                </div>
                <div className={style["comment-text"]}>{comment.text}</div>
              </div>
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default CommentList;



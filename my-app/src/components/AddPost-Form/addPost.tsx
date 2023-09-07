// components/PostForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/PostSlice"; // Импортируйте ваш action
import { AppDispatch } from "../../app/store";

function PostForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Отправка данных на сервер
    dispatch(
      createPost({
          title,
          text,
          imageURL,
      })
    );

    // Очистка полей формы после отправки
    setTitle("");
    setText("");
    setImageURL("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>ImageURL</label>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;

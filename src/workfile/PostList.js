import { useState } from "react";
import "../App.css";
import React from "react";

export const PostList = () => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
    };

    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        console.log("success", res);
        return <div>作成しました</div>;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="post_container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">タイトル</label>
        <input
          type="text"
          className="title"
          value={title}
          onChange={handleTitleChange}
          min_length="1"
          required
        />

        <button type="submit">スレッド作成</button>
      </form>
    </div>
  );
};

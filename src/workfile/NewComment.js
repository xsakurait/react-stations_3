import "../App.css";
import React from "react";

import { useState } from "react";

export const NewComment = (props) => {
  const [comment, setComment] = useState("");

  const commentChangeHandle = (event) => {
    setComment(event.target.value);
  };
  const thread_id = props.thread_id;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      post: comment,
    };

    // ここでListのidを使いたいが２個上の値を取得する方法はuseContent以外ある？
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" +
        thread_id +
        "/posts",
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="post_container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">コメント</label>
        <input
          type="text"
          className="comment"
          value={comment}
          onChange={commentChangeHandle}
          min_length="1"
          required
        />

        <button type="submit">コメント新規追加</button>
      </form>
    </div>
  );
};

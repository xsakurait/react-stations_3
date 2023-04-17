import { useState, useEffect } from "react";
import React from "react";
import { NewComment } from "./NewComment";
// import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ThreadId = (props) => {
  const [threadComments, setThreadComments] = useState(["a"]);

  // flag
  const [showChild, setShowChild] = useState(false);
  const { thread_id } = useParams();
  // const thread = useLocation();
  // const thread_id = thread.pathname.split("/")[1];
  useEffect(() => {
    // offset=0 １件目から１０件取得
    // serverurl/endpoint(接続先機器)?queryparameter
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" +
        thread_id  +
        "/posts",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setThreadComments(result.posts);
      });
    console.log(thread_id);
    console.log(typeof threadComments);
    console.log(threadComments);
  }, []);

  const handleClick = () => {
    setShowChild(true);
  };

  // ネスト内でしかthread_post使えない
  // 1個しか要素ないときmapつかうとエラーになる
  // if (thread_post!==undegined&&thread_post!==null){}
  const thread_post = threadComments.map((thre) => {
    return (
      <div className="container" key={thre.id}>
        <div>{thre.post}</div>
      </div>
    );
  });

  // for文
  // const thread_post = threadComments;
  // for (let i = 0; i < threadComments.length(); i++){
  //   thread_post =()=>{
  //   return (
  //       <div className="container2" key={thre}>
  //         <div>{thre.posts}</div>
  //       </div>
  //     );
  //   }
  // }

  return (
    <div>
      <h2>{props.title}</h2>
      <hr />
      <h5>{thread_post}</h5>
      <hr />
      {/* onClickはイベントハンドラなのでフラグを介して子コンポーネントの設定する */}
      <button onClick={handleClick}>コメント新規作成</button>
      {showChild && <NewComment thread_id={thread_id} />}
    </div>
  );
};

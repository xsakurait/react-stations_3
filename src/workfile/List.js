import React, { useState, useEffect } from "react";
// import { PostList } from "./PostList";
import "../App.css";

import { Link } from "react-router-dom";

export const List = (props) => {

  const [threadList, setThreadList] = useState([""]);
  // flag
  // const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    // offset=0 １件目から１０件取得
    // serverurl/endpoint(接続先機器)?queryparameter
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=20",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((result) => {
        setThreadList(result);
      });
    console.log(typeof threadList);
  }, []);

  // const handleClick = () => {
  //   setShowChild(true);
  // };

  const lists = threadList.map((thre) => {
    console.log({ thre });
    let thread_id = thre.id;

    // 子コンポーネントの値を渡す方法 コンポーネントでは親から子の一方向性
    return (
      <>
        {/* JSXでThreadIdに移動（他の要素は表示しない） aタグのhrefには子コンポーネント指定できない */}
        <Link
          to={`/thread/${thread_id}`}
          title={thre.title}
          key={thre}
          className="link"
        >
          <div className="container" key={thre}>
            <h2 className="title">{thre.title}</h2>
            <p className="id">{thre.id}</p>
            <hr />
          </div>
        </Link>
      </>
    );
  });

  return (
    <div>
      <h1>一覧</h1>
      <hr />
      <div>{lists}</div>
      {/* onClickはイベントハンドラなのでフラグを介して子コンポーネントの設定する */}
      <Link to="./PostList/new">
        <button>スレッド新規作成</button>
      </Link>
      {/* {showChild && <PostList />} */}
    </div>
  );
};

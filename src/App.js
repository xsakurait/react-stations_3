import { Home } from './workfile/Home';
import { ThreadId } from './workfile/ThreadId';
import { PostList } from './workfile/PostList';
import React from 'react';

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thread/:thread_id" element={<ThreadId />} />
          <Route path="/PostList/new" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

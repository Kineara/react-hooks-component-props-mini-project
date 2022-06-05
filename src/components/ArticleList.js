import React from 'react';
import Article from './Article';

function ArticleList({posts}) {
  return (
    <main>
      {posts.map(el => <Article title={el.title} date={el.date} preview={el.preview} key={el.id} />)}
    </main>
  )
}

export default ArticleList
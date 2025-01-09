import React from 'react';

type Memo = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

type MemoItemProps = {
  memo: Memo;
  onDelete: (id: number) => void;
  onEdit: (memo: Memo) => void;
};

const MemoItem: React.FC<MemoItemProps> = ({
  memo,
  onDelete,
  onEdit
}) => {

// ▼ 追加 ////////////////////////////////////////////////////////▼
  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
// ▲ 追加 ////////////////////////////////////////////////////////▲

return (
    <div>
      <h3>{memo.title}</h3>
      {/* <p>{memo.content}</p> */}

      {/* <!--▼ 追加 =============================--> */}
      <p>{formatContent(memo.content)}</p>  {/* 改行を反映させる */}
      {/* <!--▲ 追加 =============================--> */}

      <small>{memo.createdAt.toLocaleString()}</small>
      <button onClick={() => onEdit(memo)}>編集</button>
      <button onClick={() => onDelete(memo.id)}>削除</button>
    </div>
  );
};

export default MemoItem;

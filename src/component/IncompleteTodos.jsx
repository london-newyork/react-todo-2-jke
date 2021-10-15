import React from 'react';
import App from '../App';

export const IncompleteTodos = (props) => {
    const  { todos, onClickComplete, onClickDelete } = props;
    return (
    <div className='incomplete-area'>
    <p className='title'>未完了のTODO</p>
    <ul>
        {todos.map((todo, index) => { //0番目の要素、１番目の要素と操作しやすい
            return (
        <div key={todo} className='list-row'>
            <li>{todo}</li>
            <button onClick={()=> onClickComplete(index)}>完了</button>
            <button onClick={()=> onClickDelete(index)}>削除</button>
        </div>
            );
        })}
    </ul>
</div>);
}

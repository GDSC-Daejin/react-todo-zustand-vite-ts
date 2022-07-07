import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import {
  StackButton,
  StackImage,
  StackInput,
  StackInputButtonWrapper,
  StackSubtitle,
  StackTitle,
  StackWrapper,
  TodoSection,
  TodoWrapper,
} from './home.styled';
import { todoStore } from '../store/todoStore';
import TodoCard from '../components/TodoCard';

const HomeLayout = () => {
  // input 값 받기
  const [content, setContent] = useState<string | null>(null);
  //store 데이터 받아오기
  const { todos, addTodo } = todoStore();

  const addTodoHandler = () => {
    //내용이 입력되었으면 TODO 추가
    if (content) {
      addTodo(content);
      setContent('');
    } else {
      //내용이 없으면 알림
      alert('내용을 입력해주세요.');
    }
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodoHandler();
    }
  };
  return (
    <StackWrapper>
      <div>
        <StackImage src={viteLogo} className="logo" alt="Vite logo" />
        <StackImage src={reactLogo} className="react" alt="React logo" />
      </div>
      <StackTitle>Vite + React + Eslint + Prettier</StackTitle>
      <StackSubtitle>Boilerplate</StackSubtitle>
      <StackInputButtonWrapper>
        {/*TODO값 입력하기*/}
        <StackInput
          placeholder={'할 일을 입력해요'}
          value={content ?? ''} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
          type={'text'}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행
        />
        {/*TODO 추가하기 input 값이 없다면 추가 안됨*/}
        <StackButton onClick={() => addTodoHandler()}>추가하기</StackButton>
      </StackInputButtonWrapper>
      <TodoSection>
        {/*TODO 데이터 뿌리기*/}
        {todos.map((todo) => (
          <TodoWrapper key={todo.id}>
            <TodoCard {...todo} />
          </TodoWrapper>
        ))}
      </TodoSection>
    </StackWrapper>
  );
};

export default HomeLayout;

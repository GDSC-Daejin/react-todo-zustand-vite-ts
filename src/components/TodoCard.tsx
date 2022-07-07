import React from 'react';
import styled, { css } from 'styled-components';
import { ITodoType } from '../types/todo';
import { todoStore } from '../store/todoStore';

const TodoWrapper = styled.div`
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleBlue};
  }
`;
const TodoContent = styled.div<{ isCompleted: boolean }>`
  color: ${({ theme }) => theme.colors.grey50};
  font-size: ${({ theme }) => theme.fontSize.body2};
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.grey600};
    `}
`;
const TodoButton = styled.button`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey50};
  font-size: ${({ theme }) => theme.fontSize.body3};
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleGreen};
  }
  &.remove:hover {
    border-color: ${({ theme }) => theme.colors.googleRed};
  }
  &:last-child {
    margin-left: 10px;
  }
`;

const TodoCard: React.FC<ITodoType> = ({ id, content, isCompleted, date }) => {
  const { removeTodo, toggleCompletedTodo, updateTodo } = todoStore();
  return (
    <TodoWrapper onClick={() => toggleCompletedTodo(id)}>
      <TodoContent isCompleted={isCompleted}>{content}</TodoContent>
      <div>
        <TodoButton onClick={() => updateTodo(id, content)}>
          수정하기
        </TodoButton>
        <TodoButton onClick={() => removeTodo(id)} className={'remove'}>
          삭제하기
        </TodoButton>
      </div>
    </TodoWrapper>
  );
};

export default TodoCard;

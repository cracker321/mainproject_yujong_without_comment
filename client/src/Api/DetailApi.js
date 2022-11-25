import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 이미지 더미 데이터
let images = [
  'https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80',
  'https://images.unsplash.com/photo-1619961310056-1f5c8df685d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1503001831666-8f3cf3a24544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1526306063970-d5498ad00f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1552694477-2a18dd7d4de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
];

// 좋아요 조회
export const useGetLike = ({ postId }) => {
  try {
    const response = axios.get(`/post/${postId}/like`);
    if (response.status === 200) {
      console.log('Okay...');
      return response.data;
    }
  } catch (err) {
    if (err.response.status === 404) {
      console.log('404 Error...');
    }
  }
};

// 게시글 내용 조회
export const useGetDetail = ({ postId }) => {
  try {
    const response = axios.get(`/post/${postId}/detail`);
    if (response.status === 200) {
      console.log('Okay...');
      return response.data;
    }
  } catch (err) {
    if (err.response.status === 404) {
      console.log('404 Error...');
    }
  }
};

// 댓글 조회
export const useGetComment = ({ postId }) => {
  try {
    const response = axios.get(`/post/${postId}/comment`);
    if (response.status === 200) {
      console.log('Okay...');
      return response.data;
    }
  } catch (err) {
    if (err.response.status === 404) {
      console.log('404 Error...');
    }
  }
};

// 북마크 조회
export const useGetBookmark = ({ postId }) => {
  try {
    const response = axios.get(`/post/${postId}/bookmark`);
    if (response.status === 200) {
      console.log('Okay...');
      return response.data;
    }
  } catch (err) {
    if (err.response.status === 404) {
      console.log('404 Error...');
    }
  }
};

// 삭제 api
export const useConfirm = (message = null, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      axios
        .delete(`/main/1/delete`)
        .then((res) => {
          const navigate = useNavigate();
          navigate(`/`);
          console.log(res);
        })
        .catch((err) => console.error(err));
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

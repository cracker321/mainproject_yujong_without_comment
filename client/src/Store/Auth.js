import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'useInfo',
  initialState: {
    memberId: null,
    authenticated: false, //authenticated : 현재 로그인 여부를 간단히 확인하기 위해 선언.
    email: null, //accessToken : Access Token 저장
    nickname: null, //expireTime : Access Token 의 만료 시간
    tags: [],
  },
  reducers: {
    SET_LoginUserInfo: (state, action) => {
      state.authenticated = true;
      state.memberId = action.payload.memberId;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    },
    DELETE_LoginUserInfo: (state) => {
      state.authenticated = false;
      state.memberId = null;
      state.email = null;
      state.nickname = null;
    },
    SET_TagsInfo: (state, action) => {
      // 추후에 수정
      state.tags = action.payload.tags;
    },
  },
});
//SET_TOKEN : Access Token 정보를 저장한다.
//DELETE_TOKEN : 값을 모두 초기화함으로써 Access Token에 대한 정보도 삭제한다.
export const { SET_TOKEN, DELETE_TOKEN, SET_TagsInfo } = tokenSlice.actions;

export default tokenSlice.reducer;

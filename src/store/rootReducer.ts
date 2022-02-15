/*
 * @Date: 2022-01-14 16:16:54
 * @Description: 全局 reducer
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInfoInterface {
  id: string,
  name: string,
  nickname: string,
  avatar: string,
  email: string,
  phone: string,
  address: string,
  createTime: string,
  disabled: boolean
}

type PartialUserInfoInterface = Partial<UserInfoInterface>

interface InitialStateInterface {
  userInfo: PartialUserInfoInterface,
  token: string,
}

const initialState: InitialStateInterface = {
  userInfo: {},
  token: '',
}

const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<PartialUserInfoInterface>) {
      state.userInfo = action.payload
    },
    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    }
  }
})

export const { updateUserInfo, updateToken } = reducer.actions
export default reducer.reducer
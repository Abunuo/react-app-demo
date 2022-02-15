/*
 * @Date: 2022-01-14 16:10:35
 * @Description: redux useDispatch UseSelector hook
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// example: import { useAppSelector, useAppDispatch } from '@/store/hook'
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
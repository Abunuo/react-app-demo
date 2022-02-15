/*
 * @Date: 2021-12-31 15:55:47
 * @Description:
 */
import React from "react";
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { updateUserInfo } from "@/store/rootReducer";

const MainIndex: React.FC = () => {
	const userInfo = useAppSelector(state => state.root.userInfo)
	const dispatch = useAppDispatch()
	
	React.useEffect(() => {
		dispatch(updateUserInfo(Object.assign({}, userInfo, {
			name: '张三'
		})))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			<h1>index</h1>
			<h2>{userInfo.name}</h2>
		</div>
	);
};

export default MainIndex;

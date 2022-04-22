/*
* @Date: 2022-04-22 16:31:34
* @Description: 强更新 hook
* 思想：多个组件同时共用一个 useState 或者 useReducer
*      一个组件更新，执行订阅函数列表（订阅函数可以自定义），达到所有组件都更新的目的
*/
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useReducer, useEffect } from "react";

// const useForceUpdate = () => useReducer(state => !state, false)[1];
const useForceUpdate = () => useState<any>(false)[1]

const createSharedState = (reducer, initialState) => {
  const subscribers: any[] = [];
  let state = initialState;
  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach(callback => callback());
  };
  const useSharedState = (cb?: any) => {
    const forceUpdate = useForceUpdate();
    useEffect(() => {
      const callback = () => {
        forceUpdate(Date.now())
        cb?.();
      };
      subscribers.push(callback);
      // callback(); // in case it's already updated
      const cleanup = () => {
        const index = subscribers.indexOf(callback);
        subscribers.splice(index, 1);
      };
      return cleanup;
    }, []);
    return [state, dispatch];
  };
  return useSharedState;
};

export default createSharedState
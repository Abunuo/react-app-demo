/*
 * @Date: 2022-04-22 16:30:57
 * @Description: 测试自定义 subscribe
 */
import createSharedState from "@/hooks/useForceUpdate"

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: throw new Error('Unexpected action');
  }
};

const useCount1 = createSharedState(reducer, initialState);
const useCount2 = createSharedState(reducer, initialState);

const Counter = ({ count, dispatch }) => (
  <div>
    {count}
    <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    <button onClick={() => dispatch({ type: 'set', count: 0 })}>reset</button>
  </div>
);

const Counter1 = ({cb}) => {
  const [count, dispatch] = useCount1(cb);
  return <Counter count={count} dispatch={dispatch} />
};

const Counter2 = () => {
  const [count, dispatch] = useCount2();
  return <Counter count={count} dispatch={dispatch} />
};

const TextForceHook = () => {
  return (
    <>
      <Counter1 cb={() => console.log("Counter1-1：Counter1 更新了")}/>
      <Counter1 cb={() => console.log("Counter1-2：Counter1 更新了")}/>
      <Counter2 />
      <Counter2 />
    </>
  )
}

export default TextForceHook
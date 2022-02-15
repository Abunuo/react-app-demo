/*
 * @Date: 2022-01-12 17:49:11
 * @Description: Index test
 */
import React from "react"
import renderer from 'react-test-renderer';
import MainIndex from './index';

it('MainIndex show Dom', () => {
  const component = renderer.create(
    <MainIndex></MainIndex>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
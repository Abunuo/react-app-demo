/*
 * @Date: 2021-12-31 11:17:31
 * @Description: 
 * @Notice:
 *  refs 可以获取到 【Class Component】实例，【Function Component】必须用 React.forwardRef 接受
 */
import React, { useState, useEffect } from "react";
import { Outlet, Link } from 'react-router-dom'
import '@/style/layout-style/main.scss'

interface MeauItemInterface {
  name: string,
  link: string,
}
interface PropsType {
  title: string
}


const MainLayout: React.FC<PropsType> = props => {

  const [menuList, setMenuList] = useState<MeauItemInterface[]>([])

  // 菜单
  const MenuItem = (props) => {
    const itemList = menuList.map(item => 
      <div className="menu-item" key={item.link}>
        <Link to={item.link}>{item.name}</Link>
      </div>
    )
    return (
      <div className="menu-wrap">{ itemList }</div>
    )
  }

  // 主体内容
  const ContentInner = () => {
    return (
      <div className="content-wrap">
        <Outlet />
      </div>
    )
  }

  useEffect(() => {
    // 初始化菜单
    setMenuList([{
      name: '首页',
      link: '/'
    }, {
      name: '用户管理',
      link: '/user-manage'
    }])
  }, [])

  return (
    <div className="main-layout-container">
      <div className="main-layout-header">
        {props.title}
      </div>
      <div className="main-layout-content">
        <MenuItem />
        <ContentInner/>
      </div>
    </div>
  )
}

export default MainLayout
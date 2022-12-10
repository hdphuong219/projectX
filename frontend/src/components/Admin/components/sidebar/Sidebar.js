import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function Sidebar(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { orderPendding } = useSelector((state) => state.allOrder);
  let totalNewOrder;

  if (orderPendding) {
    totalNewOrder = orderPendding.length;
  }

  useEffect(() => {
    const getNewOrder = () => {
      dispatch(GetAllOrderPendding());
    };
    getNewOrder();
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://raw.githubusercontent.com/trananhtuat/tua-react-admin/main/src/assets/images/logo.png"
          alt=""
        ></img>
      </div>
      <div className="sidebar-list">
        <Link to="/admin" className={"sidebar-list-item"}>
          <span>
            <AppstoreOutlined></AppstoreOutlined>
          </span>
          <p>Bảng điều khiển</p>
        </Link>
        <Link to="/admin/category" className={"sidebar-list-item"}>
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Danh mục</p>
        </Link>
        <Link to="/admin/product" className={"sidebar-list-item"}>
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Sản phẩm</p>
        </Link>
        <Link to="/admin/customer" className={"sidebar-list-item"}>
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Khách hàng</p>
        </Link>
        <Link to="/admin/order" className={"sidebar-list-item"}>
          <span>
            <OrderedListOutlined></OrderedListOutlined>
          </span>
          <p>
            Đặt hàng
            <div className="admin-order-new">{totalNewOrder}</div>
          </p>
        </Link>
        {/* <Link to="/admin/chat" className={location.pathname === '/admin/chat' ? 'sidebar-list-item active': 'sidebar-list-item'}>
          <span>
            <WechatOutlined></WechatOutlined>
          </span>
          <p>Chat</p>
        </Link> */}
      </div>
    </div>
  );
}

export default Sidebar;

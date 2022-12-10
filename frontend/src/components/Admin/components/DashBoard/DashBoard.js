import React from "react";
import {
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";
import { useDispatch } from "react-redux";
import { SignoutUser } from "../../../../actions/UserAction";

export default function DashBoard() {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(SignoutUser());
  };

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top-search">
            <form>
              <input placeholder="Tìm kiếm ..."></input>
              <span>
                <SearchOutlined></SearchOutlined>
              </span>
            </form>
          </div>
          <div className="dashboard-top-content">
            <div className="add-product">
              <LogoutOutlined onClick={handleSignout} />
            </div>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1666</span>
                  <span className="title">Danh mục</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShopOutlined></ShopOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">25</span>
                  <span className="title">Sản phẩm</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <UserOutlined></UserOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">2000</span>
                  <span className="title">Khách hàng</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1208</span>
                  <span className="title">Đặt hàng</span>
                </div>
              </li>
            </div>
          </div>
          <ChartDashBoard></ChartDashBoard>
        </div>

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}

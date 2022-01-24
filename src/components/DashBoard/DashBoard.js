import React from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Route, Switch, useRouteMatch } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageData from '../ManageData/ManageData';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';

const DashBoard = () => {
    let { path, url } = useRouteMatch();

  const { allFirebase } = useAuth();
  const { user, admin } = allFirebase;
    return (
      <div>
        <div></div>
        <SideNav className="mt-5 dash" onSelect={(selected) => {}}>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="Admin">
            <NavItem eventKey="Home">
              <NavText>
                <Link to="/home" className="deco">
                  {" "}
                  home
                </Link>
              </NavText>
            </NavItem>
            {admin && user.email ? (
              <>
                <NavItem eventKey="AddProduct">
                  <NavText>
                    <Link to={`${url}/addProduct`} className="deco">
                      {" "}
                      Add Product
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="manageOrder">
                  <NavText>
                    <Link to={`${url}/manageOrder`} className="deco">
                      {" "}
                      Manage Order
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="manageProducts">
                  <NavText>
                    <Link to={`${url}/manageProducts`} className="deco">
                      {" "}
                      manage Product
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="makeAdmin">
                  <NavText>
                    <Link to={`${url}/makeAdmin`} className="deco">
                      {" "}
                      make Admin
                    </Link>
                  </NavText>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem eventKey="Pay">
                  <NavText>
                    <Link to={`${url}/pay`} className="deco">
                      {" "}
                      Pay
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="myOrders">
                  <NavText>
                    <Link to={`${url}/myOrders`} className="deco">
                      {" "}
                      My Order
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="review">
                  <NavText>
                    <Link to={`${url}/review`} className="deco">
                      {" "}
                      Review
                    </Link>
                  </NavText>
                </NavItem>
              </>
            )}
          </SideNav.Nav>
        </SideNav>

        <div>
          {/* for dash content */}
          <Switch>
            <Route path={`${path}/addProduct`}>
              <AddService></AddService>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageOrder`}>
              <ManageData></ManageData>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
          </Switch>
        </div>
      </div>
    );
};

export default DashBoard;
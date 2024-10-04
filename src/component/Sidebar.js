import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
                
        <Link to="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
          <i className="fe fe-x"><span className="sr-only"></span></i>
        </Link>
        <nav className="vertnav navbar navbar-light">
          <div className="w-100 mb-4 d-flex">
            <Link className="navbar-brand mx-auto mt-2 flex-fill text-center" to="./index.html">
              <h1> Logo </h1>
            </Link>
          </div>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <Link to="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-home fe-16"></i>
                <span className="ml-3 item-text">Dashboard</span><span className="sr-only">(current)</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="dashboard">
                <li className="nav-item active">
                  <Link className="nav-link pl-3" to="./index.html"><span className="ml-1 item-text">Default</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./dashboard-analytics.html"><span className="ml-1 item-text">Analytics</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./dashboard-sales.html"><span className="ml-1 item-text">E-commerce</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./dashboard-saas.html"><span className="ml-1 item-text">Saas Dashboard</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./dashboard-system.html"><span className="ml-1 item-text">Systems</span></Link>
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Components</span>
          </p>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <Link to="#ui-elements" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-box fe-16"></i>
                <span className="ml-3 item-text">UI elements</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="ui-elements">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-color.html"><span className="ml-1 item-text">Colors</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-typograpy.html"><span className="ml-1 item-text">Typograpy</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-icons.html"><span className="ml-1 item-text">Icons</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-buttons.html"><span className="ml-1 item-text">Buttons</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-notification.html"><span className="ml-1 item-text">Notifications</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-modals.html"><span className="ml-1 item-text">Modals</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-tabs-accordion.html"><span className="ml-1 item-text">Tabs & Accordion</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./ui-progress.html"><span className="ml-1 item-text">Progress</span></Link>
                </li>
              </ul>
            </li>
            <li className="nav-item w-100">
              <Link className="nav-link" to="widgets.html">
                <i className="fe fe-layers fe-16"></i>
                <span className="ml-3 item-text">Widgets</span>
                <span className="badge badge-pill badge-primary">New</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-credit-card fe-16"></i>
                <span className="ml-3 item-text">Forms</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="forms">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./form_elements.html"><span className="ml-1 item-text">Basic Elements</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./form_advanced.html"><span className="ml-1 item-text">Advanced Elements</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./form_validation.html"><span className="ml-1 item-text">Validation</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./form_wizard.html"><span className="ml-1 item-text">Wizard</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./form_layouts.html"><span className="ml-1 item-text">Layouts</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./form_upload.html"><span className="ml-1 item-text">File upload</span></Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-grid fe-16"></i>
                <span className="ml-3 item-text">Tables</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="tables">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./table_basic.html"><span className="ml-1 item-text">Basic Tables</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./table_advanced.html"><span className="ml-1 item-text">Advanced Tables</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./table_datatables.html"><span className="ml-1 item-text">Data Tables</span></Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#charts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-pie-chart fe-16"></i>
                <span className="ml-3 item-text">Charts</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="charts">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./chart-inline.html"><span className="ml-1 item-text">Inline Chart</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./chart-chartjs.html"><span className="ml-1 item-text">Chartjs</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./chart-apexcharts.html"><span className="ml-1 item-text">ApexCharts</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./datamaps.html"><span className="ml-1 item-text">Datamaps</span></Link>
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Apps</span>
          </p>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item w-100">
              <Link className="nav-link" to="calendar.html">
                <i className="fe fe-calendar fe-16"></i>
                <span className="ml-3 item-text">Calendar</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#contact" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-book fe-16"></i>
                <span className="ml-3 item-text">Contacts</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="contact">
                <Link className="nav-link pl-3" to="./contacts-list.html"><span className="ml-1">Contact List</span></Link>
                <Link className="nav-link pl-3" to="./contacts-grid.html"><span className="ml-1">Contact Grid</span></Link>
                <Link className="nav-link pl-3" to="./contacts-new.html"><span className="ml-1">New Contact</span></Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#profile" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-user fe-16"></i>
                <span className="ml-3 item-text">Profile</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="profile">
                <Link className="nav-link pl-3" to="./profile.html"><span className="ml-1">Overview</span></Link>
                <Link className="nav-link pl-3" to="./profile-settings.html"><span className="ml-1">Settings</span></Link>
                <Link className="nav-link pl-3" to="./profile-security.html"><span className="ml-1">Security</span></Link>
                <Link className="nav-link pl-3" to="./profile-notification.html"><span className="ml-1">Notifications</span></Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#fileman" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-folder fe-16"></i>
                <span className="ml-3 item-text">File Manager</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="fileman">
                <Link className="nav-link pl-3" to="./files-list.html"><span className="ml-1">Files List</span></Link>
                <Link className="nav-link pl-3" to="./files-grid.html"><span className="ml-1">Files Grid</span></Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#support" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-compass fe-16"></i>
                <span className="ml-3 item-text">Help Desk</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="support">
                <Link className="nav-link pl-3" to="./support-center.html"><span className="ml-1">Home</span></Link>
                <Link className="nav-link pl-3" to="./support-tickets.html"><span className="ml-1">Tickets</span></Link>
                <Link className="nav-link pl-3" to="./support-ticket-detail.html"><span className="ml-1">Ticket Detail</span></Link>
                <Link className="nav-link pl-3" to="./support-faqs.html"><span className="ml-1">FAQs</span></Link>
              </ul>
            </li>
          </ul>
          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Extra</span>
          </p>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <Link to="#pages" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-file fe-16"></i>
                <span className="ml-3 item-text">Pages</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100 w-100" id="pages">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./page-orders.html">
                    <span className="ml-1 item-text">Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./page-timeline.html">
                    <span className="ml-1 item-text">Timeline</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./page-invoice.html">
                    <span className="ml-1 item-text">Invoice</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./page-404.html">
                    <span className="ml-1 item-text">Page 404</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./page-500.html">
                    <span className="ml-1 item-text">Page 500</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./page-blank.html">
                    <span className="ml-1 item-text">Blank</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#auth" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-shield fe-16"></i>
                <span className="ml-3 item-text">Authentication</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="auth">
                <Link className="nav-link pl-3" to="./auth-login.html"><span className="ml-1">Login 1</span></Link>
                <Link className="nav-link pl-3" to="./auth-login-half.html"><span className="ml-1">Login 2</span></Link>
                <Link className="nav-link pl-3" to="./auth-register.html"><span className="ml-1">Register</span></Link>
                <Link className="nav-link pl-3" to="./auth-resetpw.html"><span className="ml-1">Reset Password</span></Link>
                <Link className="nav-link pl-3" to="./auth-confirm.html"><span className="ml-1">Confirm Password</span></Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#layouts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                <i className="fe fe-layout fe-16"></i>
                <span className="ml-3 item-text">Layout</span>
              </Link>
              <ul className="collapse list-unstyled pl-4 w-100" id="layouts">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./index.html"><span className="ml-1 item-text">Default</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./index-horizontal.html"><span className="ml-1 item-text">Top Navigation</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to="./index-boxed.html"><span className="ml-1 item-text">Boxed</span></Link>
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Documentation</span>
          </p>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item w-100">
              <Link className="nav-link" to="../docs/index.html">
                <i className="fe fe-help-circle fe-16"></i>
                <span className="ml-3 item-text">Getting Start</span>
              </Link>
            </li>
          </ul>
          <div className="btn-box w-100 mt-4 mb-1">
            <Link to="https://themeforest.net/item/tinydash-bootstrap-html-admin-dashboard-template/27511269" target="_blank" className="btn mb-2 btn-primary btn-lg btn-block">
              <i className="fe fe-shopping-cart fe-12 mx-2"></i><span className="small">Buy now</span>
            </Link>
          </div>
        </nav>
      </div>
        </div>
    );
}

export default Sidebar;
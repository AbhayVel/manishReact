import React, { Children, Component, ReactNode } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';


/*
 * Added dispatch method
 */
export const BasePageFun = (props : any) => {
    const dispatch: any = useDispatch();
    const { children } = props;

    const login = () => {
        dispatch({ type: 'login', payload: { userName: "abhay", role: "admin" } });
    }
    const logout = () => {
        dispatch({ type: 'logout' });
    }


    return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <a href="index.html" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
                    </a>

                <div className="navbar-nav w-100">
                    <a href="index.html" className="nav-item nav-link active">
                            <i className="fa fa-tachometer-alt me-2" />Dashboard</a>
                        <button type="button" onClick={login}>Login </button>
                        <br />
                        <button type="button" onClick={logout}>logout </button>
                    <div className="nav-item dropdown">
                        <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-laptop me-2" />Elements</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
                    <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
                    <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</a>
                    <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
                    <div className="nav-item dropdown">
                        <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="far fa-file-alt me-2" />Pages</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="signin.html" className="dropdown-item">Sign In</a>
                            <a href="signup.html" className="dropdown-item">Sign Up</a>
                            <a href="404.html" className="dropdown-item">404 Error</a>
                            <a href="blank.html" className="dropdown-item">Blank Page</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
       
        <div className="content">
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
                </a>
                <a href="index.html" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars" />
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search" />
                </form>
                <div className="nav-item dropdown">
                    <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-bell me-lg-2" />
                        <span className="d-none d-lg-inline-flex">Notificatin</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <a href="index.html" className="dropdown-item">
                            <h6 className="fw-normal mb-0">Profile updated</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                            <a href="index.html" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                                <a href="index.html" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Password changed</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                    <a href="index.html" className="dropdown-item text-center">See all notifications</a>
                    </div>
                </div>
            </nav>
                    {children}
       
        </div>
    </div>
    )
}

interface IBaseProps {
    children: ReactNode; 
    pLogout?: any |undefined  ;
    pLogin?: any | undefined;
    pIsLogin?: any | undefined;
}
interface IBaseState {
    other: any;
}

class BasePage extends Component<any> {
    constructor(props: any) {
         super(props);           
    }

    login = () => {
        if (this.props && this.props?.pLogin) {
            this.props?.pLogin({ type: 'login', payload: { userName: "abhay", role: "admin" } });

		}
            }

    logout=()=> {
        ;
        if (this.props && this.props?.pLogout) {
            this.props?.pLogout({ type: 'logout' });
        }
     }
     render() {
         return (
             <div className="container-xxl position-relative bg-white d-flex p-0">
                 <div className="sidebar pe-4 pb-3">
                     <nav className="navbar bg-light navbar-light">
                         <a href="index.html" className="navbar-brand mx-4 mb-3">
                             <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
                         </a>

                         <div className="navbar-nav w-100">
                             <a href="index.html" className="nav-item nav-link active">
                                 <i className="fa fa-tachometer-alt me-2" />Dashboard</a>
                             <button type="button" onClick={this.login}>Login </button>
                             <br />
                             <button type="button" onClick={this.logout}>logout </button>
                             <div className="nav-item dropdown">
                                 <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                     <i className="fa fa-laptop me-2" />Elements</a>
                                 <div className="dropdown-menu bg-transparent border-0">
                                     <a href="button.html" className="dropdown-item">Buttons</a>
                                     <a href="typography.html" className="dropdown-item">Typography</a>
                                     <a href="element.html" className="dropdown-item">Other Elements</a>
                                 </div>
                             </div>
                             <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
                             <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
                             <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</a>
                             <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
                             <div className="nav-item dropdown">
                                 <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                     <i className="far fa-file-alt me-2" />Pages</a>
                                 <div className="dropdown-menu bg-transparent border-0">
                                     <a href="signin.html" className="dropdown-item">Sign In</a>
                                     <a href="signup.html" className="dropdown-item">Sign Up</a>
                                     <a href="404.html" className="dropdown-item">404 Error</a>
                                     <a href="blank.html" className="dropdown-item">Blank Page</a>
                                 </div>
                             </div>
                         </div>
                     </nav>
                 </div>

                 <div className="content">
                     <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                         <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                             <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
                         </a>
                         <a href="index.html" className="sidebar-toggler flex-shrink-0">
                             <i className="fa fa-bars" />
                         </a>
                         <form className="d-none d-md-flex ms-4">
                             <input className="form-control border-0" type="search" placeholder="Search" />
                         </form>
                         <div className="nav-item dropdown">
                             <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                 <i className="fa fa-bell me-lg-2" />
                                 <span className="d-none d-lg-inline-flex">Notificatin</span>
                             </a>
                             <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                 <a href="index.html" className="dropdown-item">
                                     <h6 className="fw-normal mb-0">Profile updated</h6>
                                     <small>15 minutes ago</small>
                                 </a>
                                 <hr className="dropdown-divider" />
                                 <a href="index.html" className="dropdown-item">
                                     <h6 className="fw-normal mb-0">New user added</h6>
                                     <small>15 minutes ago</small>
                                 </a>
                                 <hr className="dropdown-divider" />
                                 <a href="index.html" className="dropdown-item">
                                     <h6 className="fw-normal mb-0">Password changed</h6>
                                     <small>15 minutes ago</small>
                                 </a>
                                 <hr className="dropdown-divider" />
                                 <a href="index.html" className="dropdown-item text-center">See all notifications</a>
                             </div>
                         </div>
                     </nav>
                     {this.props.children}

                 </div>
             </div>
         )
	 }
}

const mapProps = (state: any) => {
    return {
        pIsLogin : state.isLogin
	}
}

const mapDispatchProps = (dispatch: any) => {
    return {
        pLogin: (obj: any) => {
            dispatch(obj);
		},
        pLogout: (obj: any) => {
            dispatch(obj);
        }
    }
}

 


export default connect(mapProps,mapDispatchProps)(BasePage);
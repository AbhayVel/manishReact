import React from 'react';



export const Home = () => {

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

            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Recent Salse</h6>
                        <a href="index.html">Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col">input</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="index.html">Edit</a> <a className="btn btn-sm btn-danger" href="index.html">Delete</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="index.html">Edit</a> <a className="btn btn-sm btn-danger" href="index.html">Delete</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="index.html">Edit</a> <a className="btn btn-sm btn-danger" href="index.html">Delete</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="index.html">Edit</a> <a className="btn btn-sm btn-danger" href="index.html">Delete</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="index.html">Edit</a> <a className="btn btn-sm btn-danger" href="index.html">Delete</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-4'>
                    <ul className="pagination">
                        <li className="page-item disabled"><a className="page-link" href="index.html">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="index.html">1</a></li>
                        <li className="page-item"><a className="page-link" href="index.html">2</a></li>
                        <li className="page-item"><a className="page-link" href="index.html">3</a></li>
                        <li className="page-item"><a className="page-link" href="index.html">Next</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
                   
                       
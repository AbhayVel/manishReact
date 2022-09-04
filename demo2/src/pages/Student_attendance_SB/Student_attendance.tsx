import React, { useState } from 'react';
import { filterCommon, convertDate } from '../../common/utilities-functions';

export const StudentAttendance = () => {
    const [fullData, setFullData] = useState([{
                id: 1,
                name: 'Komal',
                aDate: '01-01-2022',
                status: "p",
                teachersNote: "sick",
                participation: 100    
            },
            {
                id: 2,
                name: 'Nivant',
                aDate: '01-02-2022',
                status: "p",
                teachersNote: "sick",
                participation: 100     
            },
            {
                id: 3,
                name: 'Rajit',
                aDate: '01-02-2022',
                status: "p",
                teachersNote: "AAA",
                participation: 100    
            },
            {
                id: 4,
                name: 'sanket',
                aDate: '01-02-2022',
                status: "p",
                teachersNote: "sick",
                participation: 100      
            },
            {
                id: 5,
                name: 'Yogesh',
                aDate: '02-02-2022',
                status: "p",
                teachersNote: "sick",
                participation: 100     
            },
            {
                id: 6,
                name: 'Akash',
                aDate: '06-02-2022',
                status: "a",
                teachersNote: "ZZZ",
                participation: 10
            },
            {
                id: 8,
                name: 'Zara',
                aDate: '06-02-2022',
                status: "a",
                teachersNote: "all ok",
                participation: 70
            
        }
    ])
    const [headers, setHeader] = useState([
        {
            displayName : "Id",
            columnName : "id",
            issortable : true,
            isserchable : true,
            type : 'num',
            searchtype : [
                {
                    columnName : 'id',
                    value:'',
                    type: 'num'
                }
        ]                   
        },
        {
            displayName : "Student Name",
            columnName : "name",
            issortable : true,
            isserchable : true,
            type : 'ci',
            searchtype : [
                {
                    columnName : 'name',
                    value:'',
                    type: 'ci'
                }
        ]       
        },
        {
            displayName : "DOJ",
            columnName : "aDate",
            issortable : true,
            isserchable : false,
            type : 'date',
            searchtype : [
                {
                    columnName : 'aDate',
                    value:'',
                    type: 'date'
                }
        ]       
        },
        {
            displayName : "Status",
            columnName : "status",
            issortable : false,
            isserchable : true,
            type : 'ci',
            searchtype : [
                {
                    columnName : 'status',
                    value:'',
                    type: 'ci'
                }
        ]       
        },
        {
            displayName : "Teachers Note",
            columnName : "teachersNote",
            issortable : true,
            isserchable : true,
            type : 'cs',
            searchtype : [
                {
                    columnName : 'teachersNote',
                    value:'',
                    type: 'cs'
                }
        ]       
        },
        {
            displayName : "Participation",
            columnName : "participation",
            issortable : true,
            isserchable : true,
            type : 'num',
            searchtype : [
                {
                    columnName : 'id',
                    value:'',
                    type: 'num'
                }
        ]       
        }
    ])
    const [attendanceData, setattendanceData] = useState([
        ...fullData
    ])

    const [sortOrder,setSortOrder] = useState(1);


    const sortData = (data:any) =>{
        const columnName = data?.columnName;
        const columnType = data.type;
        setSortOrder (sortOrder * -1)
        attendanceData.sort((a:any,b:any) =>{
            if (columnType === 'ci'){
            return a[columnName].toUpperCase() > b[columnName].toUpperCase() ? -1 * sortOrder :1 * sortOrder;
            }else if (columnType === 'date') {
                return convertDate(a[columnName]) > convertDate(b[columnName]) ? -1 * sortOrder : 1 * sortOrder;
            }
            
            return a[columnName] > b[columnName] ? -1 * sortOrder :1 * sortOrder;
        })
        const d = [...attendanceData];
        setattendanceData(d);       
        
    }
    const searchData = (s:any, value:any) =>{
        
                        const columnName = s?.columnName;
                        const columnType = s.type;
                        const FilterStudent = fullData.filter((a:any) => {
                            if (value === "" || value === undefined || value === null){
                                return true;
                            }
                            else if(columnType === "cs"){
                                return a[columnName].indexOf(value) > -1;
                            }
                            else if(columnType === "ci"){
                                
                                return a[columnName]?.toLowerCase()?.indexOf(value.toLowerCase()) > -1;
                            }
                            else if(columnType === "num"){
                                return +a[columnName] === +value;
                            }                   
                            return (a[columnName])=== (value);
                        })  
                        
                        setattendanceData(FilterStudent)
                }

    const filterData = (header:any , search:any , val:any)=>{
        search.value= val;
        const data = fullData.filter((e:any)=>{
            if(search.value === ""){                
                return true                
            }
            else if(search.type==='num'){
                return (+e[search.columnName]) === (+search.value);
            }
            else if(search.type==='ci'){
                return e[search.columnName].toLowerCase().indexOf(search.value.toLowerCase()) > -1;
            }
            else if(search.type === 'cs'){
                return e[search.columnName].indexOf(search.value) > -1;                 
            }
            return true;
        })
        setattendanceData(data);
        setHeader ([...headers])
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
                            <h6 className="mb-0">Student Attendance</h6>
                            <a href="index.html">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                <tr className="text-dark">
                                        {
                                            headers.map((e) => {
                                                if(e.issortable === true ){
                                                    return (                                                        
                                                        <th onClick={ () => {sortData(e)}}>{e.displayName}</th>
                                                    )
                                                }
                                                return (
                                                    <th>&nbsp</th>
                                                )
                                            })
                                        }

                                    </tr>
                                    <tr className="text-dark">
                                        {
                                            headers.map((e) => {
                                                if(e.isserchable === true ){
                                                    return (
                                                       <th>
                                                        {
                                                            e?.searchtype?.map((s)=>{                                                               
                                                               return(
                                                               <input className='search' ele-value={s} 
                                                               onChange={(event:any)=>{
                                                                filterData(e,s,event?.target?.value)}} type='text' />
                                                             )})                                                            
                                                        }
                                                       </th>
                                                    )
                                                }
                                                return (
                                                    <input type="text" value="test2"/>
                                                   
                                                )
                                            })
                                        }

                                    </tr>

                                </thead>
                                <tbody>

                                    {
                                        attendanceData.map((e) => {
                                            return (
                                                <tr>
                                                    <td>{e.id}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.aDate}</td>
                                                    <td>{e.status}</td>
                                                    <td>{e.teachersNote}</td>
                                                    <td>{e.participation}</td>
                                                </tr>
                                            )
                                        })
                                    }

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





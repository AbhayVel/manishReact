import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TRTDContext } from '../../common/TRRow';
import { TableGrid } from '../../common/TableGrid';
import { filterCommon, convertDate, sortCommon, gridCommon } from '../../common/utilities-functions';
import { StudentAddEdit } from './StudentEdit';


export const PopUp=(props: any)=>{
   
    const {closePopUpEvent, children, header, isShowCloseButton, isFooter}=props;

    const closeMe=()=>{
        closePopUpEvent();
    }
    return (
        <div className="modal show" id="exampleModal" data-tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{header}</h5>
              <button type="button" className="close"  onClick={()=>{closeMe()}} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                    </div>

            <div className="modal-body">
              {children}
            </div>

            {
            isFooter &&  <div className="modal-footer" >
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            }
           
          </div>
        </div>
      </div>
           

    )
}
 

export const Student = () => {

    const isLogin: any = useSelector((state: any) => state)
    debugger;
    const [currentUser, setCurrentUser]= useState({id: 1})
    const [pageConfig,setPageConfig]=useState({
        pages: [

            1,2,3,4
        ],
        currentPage: 1,
        rowPerPage: 2,
        totalPage: 0
    })
    const [headers, setHeader] = useState([
        {
            isShow: false,
            displayName: "Input",
            columnName: "id",
            isSortable: false,
            type: 'num',
            isSearchable: false,
            searchs: [
            ],
            customDisplay: true,
            customDisplayIndex: 0

        },
        {
            displayName: "Id",
            columnName: "id",
            isSortable: true,
            type: 'num',
            isSearchable: true,
            searchs: [
                {
                    columnName: "id",
                    value: '',
                    type: 'num'

				}

            ]

        },
        {
            displayName: "Full Name",
            columnName: "name",
            isSortable: true,
            type: 'ci',
            isSearchable: true,
            searchs: [
                {
                    columnName: "name",
                    value: '',
                    type: 'ci'

                }

            ]
        },
        {
            displayName: "Subject",
            columnName: "subject",
            isSortable: true,
            type: 'cs',
            searchs: [
                {
                    columnName: "subject",
                    value: '',
                    type: 'ci'

                }

            ]
        },
        {
            displayName: "Fees",
            columnName: "fees",
            isSortable: true,
            type: 'num',
            isSearchable: true,
            searchs: [
                {
                    columnName: "fees",
                    value: '',
                    type: 'GteNum'

                },
                {
                    columnName: "fees",
                    value: '',
                    type: 'LteNum'

                }

            ]
        },
        {
            displayName: "DOJ",
            columnName: "doj",
            isSortable: true,
            type: 'date',
            isSearchable: true,
            searchs: [
                {
                    columnName: "doj",
                    value: '',
                    type: 'num'

                }

            ]
        },
        {
            displayName: "Action",
            columnName: "Action",
            isSortable: false,
            isSearchable: false,
            customDisplay: true,
            customDisplayIndex: 1
        }
         
    ])
    const [fullData, setFullData] = useState([
        {
            id: 1,
            name: 'Komal',
            subject: 'Javascript',
            fees: 21000,
            doj: '01-03-2022'
        },
        {
            id: 2,
            name: 'Nivant',
            subject: 'React',
            fees: 25000,
            doj: '01-02-2021'
        },
        {
            id: 3,
            name: 'Rajit',
            subject: 'Angular',
            fees: 29000,
            doj: '13-02-2022'
        },
        {
            id: 4,
            name: 'sanket',
            subject: 'MVC',
            fees: 29000,
            doj: '15-02-2022'
        },
        {
            id: 5,
            name: 'Yogesh',
            subject: 'java',
            fees: 39000,
            doj: '02-02-2022'
        },

    ])

   const [isOpenPopUp,setIsOpenPopUp]=useState(true); 

    const [studentData, setStudentData] = useState([...fullData])
    const [sortOrder, setSortOrder] = useState(-1);
    const [columnName, setcolumnName] = useState('id');
    const [columnType, setColumnType] = useState('num');
    const sortData = (data: any) => {
        setcolumnName(data?.columnName);
        setColumnType(data?.type);         
        setSortOrder(sortOrder * -1);    
        
        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});
	}

    useEffect(()=>{
        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});

    },[])
    const filterData = (header: any, searchData: any, val: any) => {
        searchData.value = val;
        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});
	}
  

    const SetPagination=(e: any)=>{
        if(e<1 || e>pageConfig.pages.length){
            return;
        }
        pageConfig.currentPage=e;    
        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});
    }

    const openPopUp=(data: any)=>{
        debugger;
        setCurrentUser({...data.data});
        setIsOpenPopUp(true);
    }
    const closePopUp=()=>{
        setIsOpenPopUp(false);
    }

    const onDataChange=(data: any)=>{
        debugger;
        setCurrentUser({...data});


    }
   
    return (
    <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Recent Salse</h6>
                <a href="index.html">Show All</a>
                </div>

                <div>

                    {
                      JSON.stringify(isLogin)
                    }
                    <span >Id</span><input type="text" />
                    <span >Name</span><input type="text" />

                    <button type="button" >Search</button>
                </div>

            {isOpenPopUp && <PopUp header="User Edit" closePopUpEvent={closePopUp}><StudentAddEdit currentUser={currentUser}  onDataChange={onDataChange} /></PopUp>}    
           <TableGrid headers={headers} filterData={filterData} sortData={sortData} tableData={studentData} >
                   <input className="form-check-input" type="checkbox" />
                   <TRTDContext.Consumer>
               {
                (value: any)=>{
                return (    <div>
                    <a className="btn btn-sm btn-primary" onClick={(eve)=>{ openPopUp(value); eve.preventDefault();  }} href="index.html">Edit</a>
                    <a className="btn btn-sm btn-danger" href="index.html">Delete</a>     
                   </div>
                )
                }
               }
            </TRTDContext.Consumer>
            </TableGrid>


            <div className='mt-4'>
            <ul className="pagination">
            <li className={pageConfig.currentPage===1 ? 'page-item disabled' : 'page-item' }><a className="page-link"  onClick={(eve)=>{ SetPagination(pageConfig.currentPage -1); eve.preventDefault();  }} href="index.html">Previous</a></li>
             
             {
                pageConfig.pages.map((e)=>{
                    return (
                        <li key={e} className={e===pageConfig.currentPage ? 'page-item active': 'page-item'}  ><a className="page-link" onClick={(eve)=>{ SetPagination(e); eve.preventDefault();  }} href="index.html">{e}</a></li>
                    );
                })
             }
               
                <li className={pageConfig.currentPage===pageConfig.pages.length ? 'page-item disabled' : 'page-item' }><a className="page-link" onClick={(eve)=>{ SetPagination(pageConfig.currentPage +1); eve.preventDefault();  }} href="index.html">Next</a></li>
            </ul>
            </div>
    
    
    
        </div>
    </div>
    )
}
                   




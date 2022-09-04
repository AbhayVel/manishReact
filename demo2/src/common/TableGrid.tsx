import React from 'react';
import { TableBody } from './TRRow';
import { TableThead } from './TRSearchHeader';







export const TableGrid = (props: any) => {
    const {headers,tableData,filterData, sortData, children }=props;
 
    return (
        <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                               <TableThead headers={headers} filterData={filterData} sortData={sortData} />
                              <TableBody  headers={headers} tableData={tableData}> { children} </TableBody>
                        </table>
                    </div>
   )
   }
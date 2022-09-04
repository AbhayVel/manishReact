import React from 'react';

export const TRSearchHeader = (props: any) => {
 const {headers,filterData}=props;

    return (
        <tr className="text-dark">
        {
            headers.map((e: any) => {
                if(e?.isShow===false){
                    return (
                      <th key={e.columnName} className='hide'>&nbsp;</th>
                    );
                  }  
                if (e?.isSearchable === true) {
                    return (
                        <th key={e.columnName}>
                            {
                                e?.searchs?.map((s: any) => {
                                    return (
                                        <input key={e.columnName+s.type} className="search" onChange={(event: any) => {


                                            filterData(e, s, event?.target?.value);
                                        }} type="text" />
                                    )
                                }
                                )
                            }
                        </th>
                    )
                }

                return (
                    <th key={e.columnName}>&nbsp;</th>
                )


            })
        }

    </tr>

    )
}


export const TableThead = (props: any) => {
    const {headers,filterData, sortData}=props;
   
       return (
        <thead>
        <tr className="text-dark">
            
        {
                headers.map((e: any) => {
                    if(e?.isShow===false){
                        return (
                          <th className='hide' key={e.displayName}>&nbsp;</th>
                        );
                      }  
                    if (e.isSortable===true) {
                        return (
                            <th key={e.displayName}  onClick={() => { sortData(e)}}>{e.displayName}</th>
                        )
                    }
                   
                        return (
                            <th key={e.displayName} >&nbsp;</th>
                        )
                     
                   
                })
        }

        </tr>
       <TRSearchHeader headers={headers} filterData={filterData} />
  
</thead>
   
       )
   }
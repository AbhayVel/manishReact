




export const  convertDate =(str: any)=> {
  if (str instanceof Date) {
      return str;
  }
  const dateArray = str.split('-');
  if (dateArray.length === 3) {

      return new Date((+dateArray[2]), (+dateArray[1]) - 1, (+dateArray[0]), 0, 0, 0, 0);
  }
  return "not a Date"
}

export const sortCommon = (data: any,columnName: string,columnType: string,sortOrder: number )=>{
    data?.sort((a: any, b: any) => {

        if (columnType === 'ci') {
            return a[columnName].toUpperCase() > b[columnName].toUpperCase() ? -1 * sortOrder : 1 * sortOrder;
        } else if (columnType === 'date') {
            return convertDate(a[columnName]) > convertDate(b[columnName]) ? -1 * sortOrder : 1 * sortOrder;
        }
            return a[columnName] > b[columnName] ? -1 * sortOrder : 1 * sortOrder;
         
       
    })

    return data;
}

export const filterCommon=(fullData: any, headers: any)=>{
    let rows=fullData;
  
    for(let i=0;i<headers.length;i+=1){
        const searchs: Array<any> | undefined=headers[i]?.searchs;
        if(searchs===undefined){
            continue;
        }
        for(let j=0;j<searchs?.length;j+=1){
                const search=searchs[j];
                rows = rows.filter((e: any) => {
                    if (search.value === '' || search.value === undefined || search.value ===null ) {
                        return true;
                    }
                    if (search.type === 'num') {
                        return (+e[search.columnName]) === (+search.value);
                    } else if (search.type === 'ci') {
                        return e[search.columnName]?.toLowerCase()?.indexOf(search?.value?.toLowerCase()) > -1;
                    } else if (search.type === 'cs') {
                        return e[search.columnName].indexOf(search.value) > -1;
                    }  else if (search.type === 'GteNum') {
                  
                        return (+e[search.columnName]) >= (+search.value);
                    }    else if (search.type === 'LteNum') {
                        return (+e[search.columnName]) <= (+search.value);
                    }         
                    return (e[search.columnName]) === (search.value);
                
             })
        }
    }
  
    return rows;
  }


  export const gridCommon =(fullData: any, headers: any,columnName: string,columnType: string,sortOrder: number, pageConfig: any)=>{

    debugger;
    let rows: any=filterCommon(fullData,headers);
    rows=sortCommon(rows,columnName,columnType,sortOrder);
    const rowPerPage: number=pageConfig?.rowPerPage;
    const totalPages: number =Math.ceil(rows.length/rowPerPage);
    if(pageConfig.currentPage> totalPages){
        pageConfig.currentPage=1;
    }
    const startIndex=(pageConfig.currentPage-1)*rowPerPage;
    rows=rows.slice(startIndex, startIndex+rowPerPage);
  const pages=[];
    for(let i=1;i<=totalPages;i+=1){
        pages.push(i);
    }
    pageConfig.pages=pages;
    return rows;

  }
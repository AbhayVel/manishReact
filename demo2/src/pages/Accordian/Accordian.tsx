import React, { useState } from 'react';

export const Accordian = () => {
    const [isActive, setActive] = useState (false)
    const [ accData, setAccData ] = useState ([
        {
            title: 'title 1',
            isExpandable: true,
            isOpen: true,
            isAlwaysOpen : true,
            body : 'body 1 Anim pariatur cliche reprehenderit, '
        },
        {
            title: 'title 2',
            isExpandable: true,
            isOpen: false,
            isAlwaysOpen : false,
            body : 'body 2 Anim pariatur cliche reprehenderit, '
        },  {
            title: 'title 3',
            isExpandable: true,
            isOpen: false,
            isAlwaysOpen : false,
            body : 'body 3 Anim pariatur cliche reprehenderit,'
        }
    ])
    const isCollpsBtn = (e : any) =>{
        debugger
        accData.forEach(element => {
            if (element === e ){
                // e.isOpen = !e.isOpen
                if(!e.isOpen){
                    e.isOpen = true;
                }
            }else if (!element.isAlwaysOpen) {
                    element.isOpen = false               
                
            }
        });
        // if (e.isOpen === true){
        //     e.isOpen = false;

        // }else{
        //     e.isOpen = true;
        // }
        setAccData ([...accData])
    };

    return (

        <div className="accordion" id="accordionExample">         
              {
               accData.map((e)=> {
                    return (
                        <div className="card">        
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={(eve: any) => { isCollpsBtn(e); eve?.preventDefault() }}>
                                   { e.title}
                                </button>
                            </h2>
                        </div>        
                        <div id="collapseOne" className ={ e.isOpen? 'collapse show' : 'collapse'} aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                               { e.body}
                            </div>
                        </div>
                    </div>
                    )
               })          
              }
        </div>
    )
}
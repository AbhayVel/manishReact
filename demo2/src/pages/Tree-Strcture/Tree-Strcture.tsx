import React, { Children, useState } from 'react';
// import logo from '../../assets/images/icons/logo.svg'

const TreeNode = (props:any) =>{
    const {headers,open} = props;
    return (
    headers.map((e:any) => {
        return (
                <ul className="myUL children">
                    <li>
                        <span className={!e.isExpandable? '': (e.isOpen? 'caret' : 'caret caret-down') }>
                            <a onClick={(eve: any) => { open(e); eve?.preventDefault() }}>
                                {e.displayName}
                            </a>
                        </span>
                        {
                            e.children && e.isOpen && 
                                 (
                                    <TreeNode  headers = {e.children} open = {open} />
                                )
                            
                        }
                    </li>
                </ul>
        )
    }))
}

export const TreeStrcture = () => {

    const [headers, setheader] = useState([
        {
            displayName: "Beverages Title",
            titleName: "Beverages",
            isExpandable: true,
            isOpen: false,
            children: [
                {
                    displayName: "Water",
                    titleName: "Water",
                    isExpandable: false,
                    isOpen: false,
                },
                {
                    displayName: "Coffee",
                    titleName: "Coffee",
                    isExpandable: false,
                    isOpen: false,
                },
                {
                    displayName: "Tea",
                    titleName: "Tea",
                    isExpandable: true,
                    isOpen: false,
                    children: [
                        {
                            displayName: "Black Tea",
                            titleName: "Black Tea",
                        },
                        {
                            displayName: "White Tea",
                            titleName: "White Tea",
                        },
                        {
                            displayName: "Green Tea",
                            titleName: "Green Tea",
                            isExpandable: true,
                            isOpen: false,
                            children: [
                                {
                                    displayName: "Sencha",
                                    titleName: "Sencha",
                                },
                                {
                                    displayName: "Gyokuro",
                                    titleName: "Gyokuro",
                                },
                                {
                                    displayName: "Matcha",
                                    titleName: "Matcha",
                                },
                                {
                                    displayName: "Pi Lo Chun",
                                    titleName: "Pi Lo Chun",
                                }
                            ]
                        }
                    ]
                }
            ]

        },
        {
            displayName: "Beverages Title",
            titleName: "Beverages",
            isExpandable: true,
            isOpen: false,
            children: [
                {
                    displayName: "Water",
                    titleName: "Water",
                    isExpandable: false,
                    isOpen: false,
                },
                {
                    displayName: "Coffee",
                    titleName: "Coffee",
                    isExpandable: false,
                    isOpen: false,
                },
                {
                    displayName: "Tea",
                    titleName: "Tea",
                    isExpandable: true,
                    isOpen: false,
                    children: [
                        {
                            displayName: "Black Tea",
                            titleName: "Black Tea",
                        },
                        {
                            displayName: "White Tea",
                            titleName: "White Tea",
                        },
                        {
                            displayName: "Green Tea",
                            titleName: "Green Tea",
                            isExpandable: true,
                            isOpen: false,
                            children: [
                                {
                                    displayName: "Sencha",
                                    titleName: "Sencha",
                                },
                                {
                                    displayName: "Gyokuro",
                                    titleName: "Gyokuro",
                                },
                                {
                                    displayName: "Matcha",
                                    titleName: "Matcha",
                                },
                                {
                                    displayName: "Pi Lo Chun",
                                    titleName: "Pi Lo Chun",
                                }
                            ]
                        }
                    ]
                }
            ]

        },
        {
            displayName: "Abhay",
            titleName: "Teacher",
            isExpandable: true,
            isOpen: false,
            children: [
                {
                    displayName: "Sanket",
                    titleName: "Water",
                    isExpandable: false,
                    isOpen: false,
                },
                {
                    displayName: "Komal",
                    titleName: "Coffee",
                    isExpandable: false,
                    isOpen: false,
                },
                {
                    displayName: "Yogesh",
                    titleName: "Manager",
                    isExpandable: true,
                    isOpen: false,
                    children: [
                        {
                            displayName: "Komal",
                            titleName: "Komal",
                        },
                        {
                            displayName: "Ranjit",
                            titleName: "Ranjit",
                        },
                        {
                            displayName: "Suyog",
                            titleName: "Manager",
                            isExpandable: true,
                            isOpen: false,
                            children: [
                                {
                                    displayName: "Sanket",
                                    titleName: "Sanket",
                                },
                                {
                                    displayName: "Komal",
                                    titleName: "Komal",
                                },
                                {
                                    displayName: "Nivant",
                                    titleName: "Nivant",
                                },
                                {
                                    displayName: "Suraj",
                                    titleName: "Suraj",
                                }
                            ]
                        }
                    ]
                }
            ]

        }
    ]);


    const open = (e: any) => {
        if (e.isOpen === true) {
            e.isOpen = false;
        }
        else {
            e.isOpen = true;
        }
        setheader([...headers])
    }


    return (
        <div className='row'>
            <div className='col-lg-4'>
                <div className="card">
                    {/* <img className="card-img-top" src="{logo}" alt="Card cap"/> */}
                    <div className="card-body">

                        <TreeNode headers = {headers} open={open}/>
                        
                    </div>
                </div>
            </div>
        </div>


    )
}





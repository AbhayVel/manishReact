import React, { useState } from "react";

export const Tabs = (props: any) => {

   const {tabData, currentIndex, children }=props;
    const [currentIndexTab,setCurrentIndexTab]=useState(currentIndex);
   
    ;
    const [tabsData, setTabsData] = useState(tabData)  

    const tabOpen = (data:any) =>{

        tabsData.forEach((e: any)=>{

            if(data.currentIndex===e.currentIndex){
                setCurrentIndexTab(data.currentIndex)
                e.isOpen=true;
            }else {
                e.isOpen=false;
            }
        });
        setTabsData([...tabsData]);
    }
    return (
        <div className="container p-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    tabsData.map((e: any) => {
                        return (
                            <li key={e.currentIndex} className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" type="button" onClick={()=>{tabOpen(e)}}>{e.tabName}</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="tab-content" id="myTabContent">           
             <div className ="tab-pane fade show active"  id="home" role="tabpanel" aria-labelledby="home-tab">
                
                { tabsData[currentIndexTab].childIndex > -1 &&  children[tabsData[currentIndexTab].childIndex]}
                { tabsData[currentIndexTab].childIndex === -1 &&  tabsData[currentIndexTab].tabData}
                
                </div>
            </div>
        </div>
    )
}


export const Tab = () => {
    
   const currentIndex=1;
    const tabData = [
        {
            isExpandable: true,
            isOpen: true,
            tabName: "Home",
            currentIndex: 0,
            childIndex: 1,
            tabData: "Home: This is some placeholder content the Contact tab's associated content."
        },
        {
            isExpandable: true,
            isOpen: false,
            tabName: "Profile",
            currentIndex: 1,
            childIndex: 2,
            tabData: "Profile: This is some placeholder content the Contact tab's associated content."
        },
        {
            isExpandable: true,
            isOpen: false,
            tabName: "Contact",
            currentIndex: 2,
            childIndex: 3,
            tabData: "Contact: This is some placeholder content the Contact tab's associated content."
        }
    ]

   

    
    return (
        <div className="container p-4">
            <Tabs tabData={tabData} currentIndex={currentIndex}>
                <div>
                    <input type="text" />
                </div>

                <div>
                   <select>
                        <option value="1">Home</option>
                    </select>
                </div>


                <div>
                   I am in third 
                </div>

                <div>
                  I am in 4th
                </div>
            </Tabs>
        </div>
    )
}



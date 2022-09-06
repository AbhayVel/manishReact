import React from 'react';
import Child1 from './Child';
import Child2 from './Child2';
import Child3 from './Child3';
import Parent from './Parent';



function DashBoard() {
  return (
    <div>
          <Parent>
              <>
                  <Child1 name="a-child1" />
                  <Child2 name="a-child2" />
                  <Child3 name="a-child3" />
                  </>

              </Parent>
    </div>
  );
}

export default DashBoard;

import React from 'react';



function Parent(props: any) {
    const { children } = props;
    debugger;
  return (
      <div>
          I am in Parent component
        
          {children.props.children.map((e: any) => {
              debugger;
              return (
                  <div key={e.props.name}>
                      <div>{e.props.name}</div>
                      <div>{e}</div>
                  </div>
                  );
          })
          }
    </div>
  );
}

export default Parent;

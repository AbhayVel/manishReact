import React from 'react';

export function useTitle(props: any): void {
    React.useEffect(() => {        
        const prevTitle = document.title
        document.title = props;
        return () => {
            document.title = prevTitle
        }
    }, [])
}
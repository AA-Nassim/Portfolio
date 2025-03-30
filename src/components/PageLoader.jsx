import { Html, useProgress } from '@react-three/drei';
import React from 'react';


export const PageLoader = () => {
    return ( 
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <span className='canvas-loader' />
        <p style={{fontSize:14, color:'#F1F1F1', fontWeight:800, marginTop: 40}}>
            Loading ...
        </p>
    </div> 
    );
}
 
export default PageLoader
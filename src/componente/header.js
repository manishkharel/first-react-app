import React from "react";

const getyear=()=>{
    const newdate = new Date();
    return newdate.getFullYear();
}


const header = ()=>{
    return (<div>
            the date is { getyear()}
        </div>
    )
}

export default header;
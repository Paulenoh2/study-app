import React from "react";



const Entity = (props)=>{

    const {username,password} = props.entity;

    return(

        <div className="entity">
                <div>{username}</div>
                <div>{password}</div>

        </div>

    )


}
export default Entity;
import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import { logout, selectUser, login } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
 
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

    );
    return (  
        <div className="sidebar">
           <div className="sidebar__top">
               <img src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
               <Avatar className="sidebar__avatar" src={user.photoUrl} > 
               {user.email[0]}
               </Avatar>

               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>
           <div className="sidebar__stats">
               <div className="sidebar__stat">
                   <p> Who Viewed You</p>
                   <p className="sidebar__statNumber">2,456</p>

               </div>
               <div className="sidebar__stat">
                   <p> Views on post</p>
                   <p className="sidebar__statNumber">2,456</p>


               </div>


           </div>
           <div className="sidebar__bottom">
           <p> Recent</p>
           {recentItem('programming')}
           {recentItem('programming')}
           {recentItem('programming')}
           </div> 
        </div>
    )
}

export default Sidebar

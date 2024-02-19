import React, {useState, useEffect, useNa} from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const{Component} = props;
    const navigate = useNavigate()
    useEffect(()=>{
        let isTokenPresent = sessionStorage.getItem('Authorization');
        if(!isTokenPresent){
            navigate('/');
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )


}
export default PrivateRoute;
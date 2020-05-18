import {NavigationActions} from 'react-navigation'

let navigator;

export const setNavigate = (nav)=>{
    navigator=nav;
}
export const navigate = (routeName,params)=>{
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
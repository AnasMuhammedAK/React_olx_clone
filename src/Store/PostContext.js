import {createContext, useState} from 'react'

export const PostContext=createContext(null)

function Post ({children}){
const [postData,setPostData] = useState()
    return(
        <PostContext.Provider value={{postData,setPostData}}>
        {children}
        </PostContext.Provider>
    )
}
export default Post
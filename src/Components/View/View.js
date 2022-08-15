import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

import './View.css';
function View() {

  const [userData,setUserData] = useState()
  const {postData} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const {id} = postData
    firebase.firestore().collection('users').where("id","==",id).get().then((response)=>{
      response.forEach(doc=>{
        setUserData(doc.data())
      })
    })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postData.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postData.price} </p>
          <span>{postData.name}</span>
          <p>{postData.category}</p>
          <span>{postData.createdAt}</span>
        </div>
        {userData && <div className="contactDetails">
        <p>Seller details</p>
        <p>{userData.username}</p>
        <p>{userData.phone}</p>
      </div>}
      </div>
    </div>
  );
}
export default View;

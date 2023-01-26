import { useState } from "react";
import { Link } from "react-router-dom";
import { translationClearHistory } from '../../api/translate'
import { userDelete } from "../../api/user";
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext";
import { storageSave, storageDelete } from "../../utils/storage";

const ProfileActions = () => {
  const { user, setUser } = useUser()
  
  const handleLogoutClick = () => {
    if (window.confirm('Are you sure?')) {
      //send an event to the parent
      storageDelete(STORAGE_KEY_USER)
      setUser(null)
    }
  }

  const handleDeleteUserClick = () => {
    if (window.confirm("YOU CAN'T JUST LEAVE?!")){
      
      storageDelete(STORAGE_KEY_USER)
      setUser(null)
      userDelete(user)
    }
  }


  const handleClearHistoryClick = async () => {

    if (!window.confirm('Are you sure?\nThis can not be undone')) {
      return
    }

    const [clearError] = await translationClearHistory(user.id)

    if (clearError !== null) {
      return
    }

    const updatedUser = { ...user, translations: [] }
    storageSave(STORAGE_KEY_USER, updatedUser)
    setUser(updatedUser)

  }



  return (
    <div className="col-1">
      {/* <li><Link to= "/translations">Translations</Link></li> */}
      <div className="row"><button className="btn btn-sm my-button m-1" onClick={handleClearHistoryClick}>Clear history</button></div>
      <div className="row"><button className="btn btn-sm my-button m-1" onClick={handleLogoutClick}>Logout</button></div>
      <div className="row"><button className="btn btn-sm my-button m-1" onClick={handleDeleteUserClick}>DELETE USER</button></div>
    </div>
  )
}
export default ProfileActions
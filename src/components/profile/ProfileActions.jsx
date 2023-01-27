// ProfileActions.jsx component handles the actions on the profile page

import { storageSave, storageDelete } from "../../utils/storage";
import { translationClearHistory } from '../../api/translate'
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext";
import { userDelete } from "../../api/user";

const ProfileActions = () => {

  const { user, setUser } = useUser()
  
  // Handles logout click.
  // Deletes user key and sets user to null
  const handleLogoutClick = () => {
    if (window.confirm('Are you sure?')) {
      storageDelete(STORAGE_KEY_USER)
      setUser(null)
    }
  }

  // Handles delete click.
  // Deletes user key and sets user to null also deletes user from API
  const handleDeleteUserClick = () => {
    if (window.confirm("YOU CAN'T JUST LEAVE?!")){
      storageDelete(STORAGE_KEY_USER)
      setUser(null)
      userDelete(user)
    }
  }

  // Handles history clear click
  // Calls translationClearHistory with a user id,
  // clears that users entire translation history.
  // Updates storage with new user and sets that user.
  // Returns confirmation window result or error
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

  // Amazing Buttons
  return (
    <div className="col-1 ">
      <div className="row"><button className="btn btn-sm my-button m-1" onClick={handleClearHistoryClick}>Clear history</button></div>
      <div className="row"><button className="btn btn-sm my-button m-1" onClick={handleLogoutClick}>Logout</button></div>
      <div className="row"><button className="btn btn-sm my-button m-1" onClick={handleDeleteUserClick}>DELETE USER</button></div>
    </div>
  )
}
export default ProfileActions
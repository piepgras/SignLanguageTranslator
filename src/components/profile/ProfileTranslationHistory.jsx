// ProfileTranslationHistory.jsx is responsible for handling
// the translations history on the profile page.

import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ history }) => {
    
  const historyList = history.map((history, index) => <ProfileTranslationHistoryItem key={index + '-' + history} history={history}/>)
    
  return (
    <section className="col-8">
      <h6 className="text-light"> Your translation history:</h6>
      <div className="card shadow p-1">
        {historyList.length===0 && <p> You have no translations yet.</p>}
        <ul className="list-group list-group-flush">
          {historyList}
        </ul>
      </div>
    </section>
  )
}
export default ProfileTranslationHistory
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({histories}) => {
    
    const historyList = histories.map((history, index) =>  <ProfileTranslationHistoryItem key={index + '-' + history} history={history}/>)
    
    return (

        <section className="col-3 " >
            <h6 className="text-light">Your translation history</h6>
            <div className="card shadow p-1">
            {historyList.length===0 && <p> You have no tranlations yet.</p>}
            <ul  className="list-group list-group-flush">
                {historyList}
            </ul>
            
            </div>
        </section>
    )
}
export default ProfileTranslationHistory
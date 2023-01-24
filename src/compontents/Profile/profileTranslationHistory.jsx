import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({histories}) => {
    
    const historyList = histories.map((history, index) => <ProfileTranslationHistoryItem key={index + '-' + history} history={history}/>)
    
    return (

        <section>
            <h3>Your translation history</h3>
            <ul>
                {historyList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory
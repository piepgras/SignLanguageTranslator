const ProfileTranslationsHistoryButton = ({translation, handleTranslationHistoryButtonClicked}) => {
 return (
    <button onClick={() => handleTranslationHistoryButtonClicked(translation.id)}>
        <section>
            <b>{translation.id}</b>
        </section>
    </button>
 )
}

export default ProfileTranslationsHistoryButton
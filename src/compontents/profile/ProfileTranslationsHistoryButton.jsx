const ProfileTranslationsHistoryButton = ({translation, handleTranslationHistoryButtonClicked}) => {
    return (
        <button onClick={() => handleTranslationHistoryButtonClicked(translation.id)}>
            <section>
                <b>{}</b>
            </section>
        </button>
    )
}

export default ProfileTranslationsHistoryButton
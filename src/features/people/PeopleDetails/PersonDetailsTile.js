export const PersonDetailsTile = ({
    poster,
    title,
    overview,
    dateOfBirth,
    placeOfBirth,
}) => (
    <article>
        <div poster={poster} />
        <div>
            <h2 title={title} />
            <>
                <h2>{title}</h2>
            </>

            <div dateOfBirth={dateOfBirth} placeOfBirth={placeOfBirth}>
                <>
                    {dateOfBirth && (
                        <div>
                            <span>Date of birth:</span>
                            <span>{dateOfBirth}</span>
                        </div>
                    )}
                    {placeOfBirth && (
                        <div>
                            <span>Place of birth:</span>
                            <span>{placeOfBirth}</span>
                        </div>
                    )}
                </>
            </div>

        </div>
        <p>{overview}</p>
    </article>
);
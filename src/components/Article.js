export default function Article({ title, date="January 1, 1970", preview, minutes}) {

    function getMinutesToReadIndicator() {
        const coffeeCups = '☕️'.repeat(Math.ceil(minutes / 5));
        const bentoBoxes = '🍱'.repeat(Math.ceil(minutes / 10));
        const emojiString = (minutes < 30) ?  coffeeCups : bentoBoxes;
        return `${emojiString} ${minutes} min read`;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} • {getMinutesToReadIndicator()}
            </small>
            <p>{preview}</p>
        </article>
    );
}
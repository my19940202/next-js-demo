export function TextList() {
    const TextArr = new Array(40).fill(0);
    return (
        <div>
            {TextArr.map((_, idx) => <h1 key={idx}>this is {idx + 1}</h1>)}
        </div>
    );
}

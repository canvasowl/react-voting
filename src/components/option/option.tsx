import {useState} from 'react';

type typeOption = {
    optionIndex: number,
    option: any
}
  
const Option = (props: typeOption) => {
    const [totalVotes, setTotalVotes] = useState(props.option.totalVotes);

    const submitVote = () => {
        let votes = totalVotes + 1
        setTotalVotes(votes)
    }

    return (
        <>
            <div className="optionContainer">
            <img src={props.option.img} alt={props.option.title} />
            <h1>{props.option.title}</h1>
            <button onClick={() => submitVote()}>Vote</button>
            <p>Total votes {totalVotes}</p>
            </div>
        </>
    )
}

export default Option
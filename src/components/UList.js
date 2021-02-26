const UList = (props) => {
    let list = [];
    for (let i = 0; i < props.items.legth; i++) {
        const items = props.items[i];
        list.push(<li>{item}</li>);
    }

    return (
        <ul>{list}</ul>
    )
}

export default UList;
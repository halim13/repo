import Item from './Item'

const ItemList = ({ data }) => {
    return ( 
        <ul id="todo-list">
        {
            data.map((list, key) => {
                return <Item key={key} data={list} />
            })
        }
        </ul>
    )
}

export default ItemList
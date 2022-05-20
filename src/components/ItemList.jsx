import Item from './Item'

const ItemList = ({ data }) => {
    return ( 
        <ul id="todo-list">
        {
            data.map(list => {
                return <Item data={list} />
            })
        }
        </ul>
    )
}

export default ItemList;
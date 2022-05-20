const Item = ({ data }) => {
    return ( 
        <li>
            <a href={`https://github.com/${data.full_name}`} target="_blank" className="link" rel="noreferrer">{data.name}</a>
            {
                !!data.description && <div className="description">{data.description}</div>
            }
            <div className="bottom">
                <div>{data.language}</div>
                <div>update on {data.updated_at.split('T')[0]}</div>
            </div>
        </li>
    )
}

export default Item
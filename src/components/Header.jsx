const Header = ({ onClick, setSearch }) => {
    return ( 
    <div id="todo-header" className="header">
        <h1>List Repository Github</h1>	
        <input type="text" placeholder="Search Username..." onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' ? onClick() : null} />
        <span className="add-button" onClick={onClick}>Get List</span>
    </div>
)}

export default Header
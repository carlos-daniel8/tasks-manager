import './styles.css';

const SearchBar = ({searchBar, setSearchBar }) => {
    return (
        <div className="search-bar">
            <input 
                type="text"
                value={searchBar} 
                onChange={(e) => setSearchBar(e.target.value)}
                placeholder="Pesquisar tarefa(s)"
            /> 
        </div>
    )
}

export default SearchBar
export const FilterCharacters = ({getCharactersAlive, getCharactersDead, getCharactersFromEarth}) => {
    return (
        <div className="text-center">
            <button type="button" onClick={() => getCharactersAlive()} className="btn btn-success m-2">Get Only Characters Alive</button>
            <button type="button" onClick={() => getCharactersDead()} className="btn btn-danger m-2">Get Only Characters Dead</button>
            <button type="button" onClick={() => getCharactersFromEarth()} className="btn btn-warning m-2">Get Only Characters From Earth</button>
        </div>
    )
}
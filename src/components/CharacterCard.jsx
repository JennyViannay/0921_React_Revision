export const CharacterCard = ({ character }) => {
    return (
        <div className="col-lg-3 col-md-4 col-xs-12 my-2">
            <div className="card">
                <img className="card-img-top" src={character.image} alt={character.name} />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                </div>
            </div>
        </div>
    )
}
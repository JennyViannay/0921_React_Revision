export const Pagination = ({ infos, page, sendRequestCharacters }) => {
    return (
        <div className="row text-center">
            <div className="col-12 mx-auto">
                <button type="button" onClick={() => infos.prev != null ? (sendRequestCharacters(page - 1)) : ''} className={`btn btn-info mx-2 ${infos.prev === null ? 'disabled' : ''}`}>Prev</button>
                <button type="button" onClick={() => infos.next != null ? (sendRequestCharacters(page + 1)) : ''} className={`btn btn-info mx-2 ${infos.next === null ? 'disabled' : ''}`}>Next</button>
            </div>
        </div>
    )
}
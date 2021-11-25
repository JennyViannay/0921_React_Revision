export const Infos = ({ infos, page }) => {
    return (
        <div className="alert alert-primary text-center">
            <p>Results {infos.count}</p>
            <p>Nombre de pages {infos.pages}</p>
            <p>Page actuelle {page}</p>
        </div>
    )
}
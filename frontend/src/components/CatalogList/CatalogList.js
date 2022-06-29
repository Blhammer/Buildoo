import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogList = ({ cards, button }) => {
    return (
        cards.map((card) => {
            return <CatalogCard key={card._id} data={card} button={button} />
        })
    );
}

export default CatalogList;
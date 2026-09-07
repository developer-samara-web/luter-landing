import ArticlesItem from "./ArticlesItem";

const ArticlesItems = ({ items }) => {
	return (
		<div className="articles__items">
			{items && items.map((item, id) => (
				<ArticlesItem key={id} {...item} />
			))}
		</div>
	);
}

export default ArticlesItems;
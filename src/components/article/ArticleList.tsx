import { ArticleType } from "../../types/article";
import Article from "./Article";

interface ArticleListProps {
	articleList: ArticleType[];
}

const ArticleList = ({ articleList }: ArticleListProps) => {
	return (
		<ul className="flex flex-col py-1 px-5 gap-2">
			{articleList.map((article) => (
				<Article article={article} key={article._id} />
			))}
		</ul>
	);
};
export default ArticleList;

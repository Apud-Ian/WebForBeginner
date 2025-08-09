import Sidebar from '../components/SideBar.jsx';
import { useParams } from 'react-router-dom';
import LineArticle from '../components/LineArticle';
import { IntroductArticles } from '../Articles/Introduct.js';
import ArticleViewer from '../components/ArticleViewer.jsx';
const Introduct = () => {
  // This component renders the introduction article page
const {tema} = useParams();
console.log(tema);
const article = IntroductArticles.find(article => article.title.toLowerCase() === tema.toLowerCase());
  const titles = IntroductArticles.map(article => article.title);
  const subtitles = article.subTitels;
  console.log(titles);
  console.log('subtituloos',subtitles);
  console.log(article);
  if (!article) {
    return <div className="text-center text-red-500">Article not found</div>;}

  return (
    <div className="grid grid-cols-5 mt-12 gap-4 p-4">
      <Sidebar titles={titles} subtitles={subtitles}/>
      <ArticleViewer article={article}/> 
    </div>
  );
}

export default Introduct;
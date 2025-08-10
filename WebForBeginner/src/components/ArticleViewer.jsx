import Paragraphs from "./ArticleComponents/Paragraphs";
import UnorderList from "./ArticleComponents/UnorderList";
import Accordion from "./ArticleComponents/Accordion";  
import SubTitles from "./ArticleComponents/SubTitles";
import Image from "./ArticleComponents/Image";
const ArticleViewer = ({ article }) => {
  
const contentArticle = article?.content.map((content, index) => {
  switch (content.type){
    case  "paragraphs":
      return <Paragraphs key={index} paragraphs={content.text} />;
    case "unorderList":
      return <UnorderList key={index} items={content.items} />;
    case "accordion":
      return <Accordion key={index} title={content.title} subTitels={content.subTitels} content={content.content} />;
    case "subTitles":
      return <SubTitles key={index} subTitel={content.subTitel} />;
    case "image":
      return <Image key={index} src={content.src} alt={content.alt} />;
  }
});
  
  if (!article || article.title === "") {
    return <div className="col-span-4 p-4">No article selected</div>;
  }

  return (
    <div className="col-span-3 text-gray-900 dark:text-gray-100 p-4 dark:bg-gray-900 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-wide mb-4">{article.title}</h1>
      <div className="space-y-6">
        {contentArticle}
      </div>
    </div>
  );
};

export default ArticleViewer;

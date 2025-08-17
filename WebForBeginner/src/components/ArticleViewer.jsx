import Paragraphs from "./ArticleComponents/Paragraphs";
import UnorderList from "./ArticleComponents/UnorderList";
import Accordion from "./ArticleComponents/Accordion";  
import SubTitles from "./ArticleComponents/SubTitles";
import Image from "./ArticleComponents/Image";
import ButtonNext from "./ArticleComponents/ButtonNext";

const ArticleViewer = ({ article, titles }) => {
  
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
    <div className="space-y-6 text-gray-900 dark:bg-stone-800 dark:text-gray-100 p-4 mt-12  border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-4xl md:text-5xl font-display  tracking-wide my-6">{article.title}</h1>
      <div className="space-y-6">
        {contentArticle}
      </div>
      <ButtonNext  titles={titles}/>
    </div>
  );
};

export default ArticleViewer;

import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/ArticlePreview";


  const ArticalsPage= ({data}) => {
    const articals=data.allNodeArticle.edges;
  
  
    return (
  <Layout>
    <SEO title="Articals Page" />
    
    <h3>Articals</h3>

  <div class="grid-container-articles">
{articals.map(article => (
            <ArticlePreview
           
             title ={article.node.title}
         
             date={article.node.created}
           
             summary={article.node.body.summary ? article.node.body.summary : article.node.body.processed.substring(0, 200)}
             path={article.node.path.alias}
             />        
         ))}
</div>

  </Layout>
  );
};

ArticalsPage.propTypes = {
  data: PropTypes.object.isRequired,
 };
export default ArticalsPage

export const query = graphql `query GetSomeArticlesData {
  allNodeArticle {
    edges {
      node {
        title
        created (formatString: "MMMM Do, YYYY")
        body {
          processed
          summary
        }
        path {
          alias
        }
      }
    }
  }
}` 

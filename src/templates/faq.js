import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"

const faq = ({ data }) => {
 const post = data.nodeFaq;

 return (
   <Layout>
     <SEO title = "faq" />
     <br></br>
     <br></br>
     <br></br>
     <h3><Link to="/faqs/" className="link">FAQs</Link> \ {post.title}</h3>
 
     <p class="p-article">
     

  <strong>Answer: </strong>
    {post.answer}
    <br></br>
    <br></br>
    

{post.relationships.article.map(article =><div><Link className="link" to={article.path.alias}>{article.title}</Link></div>)} 
{post.relationships.warranty.map(warranty =><div><Link className="link" to={warranty.path.alias}>{warranty.title}</Link></div>)}
 

  </p>

   
   </Layout>
 );
};
 
faq.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($FAQId: String!) 
 {
  nodeFaq(id: { eq: $FAQId }) 
   {
    id
    path {
      alias
    }
    title
    answer
    relationships {
      article {
        title
        path {
          alias
        }
      }
      warranty {
        title
        path {
          alias
        }
      }
    }
   }
 }`;
 
export default faq;
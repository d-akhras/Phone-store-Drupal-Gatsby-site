import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

 
const Article = ({ data,props }) => 
{
 const post = data.nodeArticle;
 

 return (
   <Layout>
     <SEO title = "article" />
     <br></br>
     <br></br>
     <br></br>
<p class="p-article">
<h3><Link to="/articals/" className="link">Articles</Link> \ {post.title}</h3>

<ul class="images-ul">
{
post.relationships.image.map(articleImage => (
          <li>
            <GatsbyImage
               image={articleImage.localFile.childImageSharp.gatsbyImageData}
            />
          </li>
        ))
      }
</ul>
<div style={{clear:"both"}}></div>
<small><em>{post.created}</em></small>
<br></br>
<br></br>

{post.body.value}
<div style={{clear:"both"}}></div>


<br></br>
   
{post.relationships.mobile_phone.map(phone =><div><Link className="link" to={phone.path.alias}>{phone.title}</Link></div>)}
<br></br>
<br></br>

{post.relationships.accessory.map(acc =><div><Link  className="link" to={acc.path.alias}>{acc.title}</Link></div>)}

</p>  
</Layout>
 );
};
 
Article.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($ArticleId: String!) 
 {
    nodeArticle(id: { eq: $ArticleId }) 
   {
    id
    title
    body {
      value
    }
    created (formatString: "MMMM Do, YYYY")
    relationships {
      mobile_phone {
        path {
          alias
        }
        title
      }
      accessory {
        path {
          alias
        }
        title
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 400, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
   }
 }`;
 
export default Article;
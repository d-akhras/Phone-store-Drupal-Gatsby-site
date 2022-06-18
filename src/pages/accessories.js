import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import Layout from "../components/layout"
import SEO from "../components/seo"
import AccessoryPreview from "../components/accessoryPreview";
import Image from "../components/image - accessories"
const AccessoriesPage= ({data}) => {
const accessories=data.allNodeAccessory.edges;


  return (
    
  <Layout>
    
    <SEO title="Accessories Page" />
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto`, }}>
      <Image />
    </div>
     

<div class="grid-container">
{accessories.map(accessory => (
            <AccessoryPreview
             key={accessory.id}
             path={accessory.node.path.alias}
             title ={accessory.node.title}
             type={accessory.node.accessory_type}
             price={accessory.node.price}
             accessoryimage={(accessory.node.relationships.image[0] === undefined? "___": accessory.node.relationships.image[0].localFile.childImageSharp.gatsbyImageData)}
             
             />        
         ))}
</div>
         
       
  
  </Layout>
  );
};

AccessoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
 };
export default AccessoriesPage


export const query  = graphql `query GetSomeAccessoriesData {
  allNodeAccessory(sort: {fields: created, order: DESC}) {
    edges {
      node {
        title
        id
        price
        item_number
        accessory_type
        path {
          alias
        }
        relationships {
        image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 150, layout: FIXED, placeholder: BLURRED)
              }
            }
          }
        }
             
      }
    }
  }
}`
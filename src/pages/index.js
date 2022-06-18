import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobilePreview from "../components/MobilePreview";


const IndexPage = ({data}) => {
const mobiles=data.allNodeMobilePhone.edges;  

return (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `0 auto`, padding: `0 1.0875rem 1.45rem`, maxWidth: `100%`,  display: `block` }}>
        <Image />
      </div>

<div class="grid-container">
{mobiles.map(mobile => (
            <MobilePreview
             key={mobile.node.id}
             title ={mobile.node.title}
             price={mobile.node.price}
             path={mobile.node.path.alias}
             phoneimage={(mobile.node.relationships.image[0] === undefined? "___": mobile.node.relationships.image[0].localFile.childImageSharp.gatsbyImageData)}
             />        
         ))}
</div>

    
  </Layout>
  );
};

export default IndexPage

export const query = graphql `query GetSomeDevicesData {
  allNodeMobilePhone {
    edges {
      node {
        title
        id
        price
        item_number
        path {
          alias
        }
        relationships {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData (width: 150, placeholder: BLURRED, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
}
`
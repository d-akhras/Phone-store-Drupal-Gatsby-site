import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Accessory = ({ data }) => {
 const post = data.nodeAccessory;

 return (
   <Layout>
     <SEO title = "accessory" />
     <br></br>
     <br></br>
     <br></br>
     <h3><Link to="/accessories/" className="link">Accessories</Link> \ {post.title}
     <Link to="" ><StaticImage className="cart-icon" src  ="../images/cartIcon.png"  alt="cart icon"   layout="fixed"   placeholder="blurred" width={50} /> </Link>
     </h3>

     <ul class="images-ul">
      {
        post.relationships.image.map(accessoryimage => (
          <li>
            <GatsbyImage
               image={accessoryimage.localFile.childImageSharp.gatsbyImageData}
            />
          </li>
        ))
      }
</ul>
<ul class="videos-ul">
      {
        post.relationships.video_file.map(phonevideo => (
          <li>
           
               <video width="100%" height="100%" src={phonevideo.localFile.url} controls  >
               Your browser does not support the video tag.
               </video>
            
          </li>
        ))
      }
</ul>
<div style={{clear:"both"}}></div>
<h2>  Specifications </h2>
 <table class="spesc">
    <tbody>
    
    <tr>
      <th>Price</th>
      <td>{post.price}</td>
    </tr>
    <tr>
      <th>Item number</th>
      <td>{post.item_number}</td>
    </tr>
    <tr>
      <th>Accessory Type</th>
      <td>{post.accessory_type}</td>
    </tr>
    <tr>
      <th>Color</th>
      <td>{post.color}</td>
    </tr>
    <tr>
      <th>Warranty</th>
      <td>{post.relationships.warranty.map(warranty =><div><Link className="link" to={warranty.path.alias}>{warranty.title}</Link></div>)}
        </td>
    </tr>
    <tr>
      <th>Shipping weight</th>
      <td>{post.shipping_weight} kg </td>
    </tr>
    <tr>
      <th>Model compatibility</th>
      <td>{post.model_compatibility}</td>
    </tr>
    <tr>
      <th>Compatible Devices</th>
      <td>{post.relationships.mobile_phone.map(mobile_phone =><div><Link className="link" to={mobile_phone.path.alias}>{mobile_phone.title}</Link></div>)}</td>
      
    </tr>
    <tr>
      <th>Product Description/ Special Features</th>
      <td>{post.special_features} </td>
    </tr>
  </tbody>
</table>

   
   </Layout>
 );
};
 
Accessory.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($AccessoryId: String!) 
 {
   nodeAccessory(id: { eq: $AccessoryId }) 
   {
     id
     title
     special_features
     price
     item_number
     color
     model_compatibility
     shipping_weight
     relationships 
     {
           mobile_phone 
          {
            path 
            {
              alias
            }
            title
          }
          warranty
           {
            path
             {
              alias
            }
            title
            warranty_provider
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 200, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
          video_file 
      {
        localFile {
          url
        }
      }
 }
       image 
        {
          alt
        }
        accessory_type
        
    }
 }`;
 
export default Accessory;
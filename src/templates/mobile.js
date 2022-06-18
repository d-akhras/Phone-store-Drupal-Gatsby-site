import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Mobile = ({ data }) => {
 const post = data.nodeMobilePhone;


 return (
   <Layout>
     <SEO title = "mobile" />
     <br></br>
     <br></br>
     <br></br>
     <h3><Link to="/" className="link">Phons  </Link>\  {post.title}
     <Link to="" ><StaticImage className="cart-icon" src  ="../images/cartIcon.png"  alt="cart icon"   layout="fixed"   placeholder="blurred" width={50} /> </Link>
     </h3>
 <ul class="images-ul">
      {
        post.relationships.image.map(phoneimage => (
          <li>
            <GatsbyImage
               image={phoneimage.localFile.childImageSharp.gatsbyImageData}
            />
          </li>
        ))
      }
</ul>
<ul class="videos-ul">
      {
        (post.relationships.videofile === null? "" :post.relationships.videofile.map(phonevideo => (
          <li>
           
               <video width="100%" height="100%" src={phonevideo.localFile.url} controls  >
               Your browser does not support the video tag.
               </video>
            
          </li>
        )))
      }
</ul>




<div style={{clear:"both"}}></div>
<h2>  Specifications </h2>
 <table class="spesc">
 
    <tbody>
    
    <tr>
      <th>price</th>
      <td>{post.price}</td>
    </tr>
    <tr>
      <th>Item Number</th>
      <td>{post.item_number}</td>
    </tr>    
    <tr>
      <th>Product Type</th>
      <td>{post.product_type}</td>
    </tr>
    <tr>
      <th>Model Series</th>
      <td>{post.model_series}</td>
    </tr>
    <tr>
      <th>Operating System</th>
      <td>{post.operating_system}</td>
    </tr>
    <tr>
      <th>Capacity</th>
      <td>{post.capacity} GB</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td>{post.ram} GB</td>
    </tr>
      
    <tr>
      <th> Processor speed</th>
      <td>{(post.processor_speed === null ? "___": post.processor_speed + " GHz" )}</td>
    </tr>
    <tr>
      <th>Camera Resolution</th>
      <td>{post.camera_resolution} MP</td>
    </tr>
    <tr>
      <th>Supported Network</th>
      <td>{post.supported_network}</td>
    </tr>
    <tr>
      <th>Sim Type</th>
      <td>{post.sim_type.map(stype =><div>{stype}</div>)} </td>
    </tr>
    <tr>
      <th>Color</th>
      <td>{post.color}</td>
    </tr>
    <tr>
      <th>Display Size</th>
      <td>{post.display_size} inches</td>
    </tr>
    <tr>
      <th>Display Resolution</th>
      <td>{post.display_resolution} Pixels</td>
    </tr>
    <tr>
      <th>GPS</th>
      <td>
        {(post.gps=== true ? "Yes" : "No") }
      </td>
    </tr>
    <tr>
      <th>Fingerprint</th>
      <td>{(post.fingerprint=== true ? "Yes" : "No")}</td>
    </tr>
    <tr>
      <th>Warranty</th>
      <td>{post.relationships.warranty.map(warranty =><div><Link className="link" to={warranty.path.alias}>{warranty.title}</Link></div>)}
      </td>
    </tr>
    <tr>
      <th>Available in the store</th>
      <td>{post.available_in_the_store}</td>
    </tr>
  </tbody>
</table>

   
   </Layout>
 );
};
 
Mobile.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($MobileId: String!) 
 {
  nodeMobilePhone(id: { eq: $MobileId }) 
   {    
    title
    price
    item_number
    product_type
    model_series
    operating_system
    capacity
    ram
    processor_speed
    camera_resolution
    supported_network
    sim_type
    color
    display_size
    display_resolution
    gps
    fingerprint
    available_in_the_store
    relationships 
    {
      warranty 
      {
        title
        path {
          alias
        }
      }

      image 
      {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 200, placeholder: BLURRED)
          }
        }
      }
      videofile 
      {
        localFile {
          url
        }
      }
    }
   }
 }`;
 
export default Mobile;
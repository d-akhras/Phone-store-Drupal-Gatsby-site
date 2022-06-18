import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"

const Warrenty = ({ data }) => {
 const post = data.nodeWarranty;

 return (
   <Layout>
     <SEO title = "warrenty" />
   
<h3><Link to="/warranties/" className="link">Warranties</Link> \ {post.title}</h3>
     
     <p class="p-article">
     Warranty duration: {post.duration}
     <br></br>
    <br></br>
     Warranty provider: {post.warranty_provider}
     <br></br>
     <br></br>
     Warranty policy: {post.warranty_policy}
    </p>


   
   </Layout>
 );
};
 
Warrenty.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($WarrentyId: String!) 
 {
  nodeWarranty(id: { eq: $WarrentyId }) 
   {
    id
    title
    duration
    warranty_provider
    warranty_policy
    
   }
 }`;
 
export default Warrenty;
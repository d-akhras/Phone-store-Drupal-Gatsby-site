const path = require('path');
exports.createPages = async ({ actions, graphql, reporter }) => 
{
  const { createPage } = actions

const result = await graphql(`
 {
    allNodeAccessory    
    {
      edges
      {
        node
        {
          path
          {
            alias
          }
          id
          title
        }
      }
    }
  
    allNodeMobilePhone 
   {
      edges 
      {
      node 
      {
        title
        id
        path 
        {
          alias
        }
      }
    }
  }

  allNodeArticle 
  {
    edges
    {
      node 
      {
        id
        path
        {
          alias
        }
        title
      }
    }
  }

  allNodeFaq 
  {
    edges
    {
      node 
      {
        id
        path
        {
          alias
        }
        title
      }
    }
  }


  allNodeWarranty {
    edges {
      node {
        title
        id
        path {
          alias
        }
      }
    }
  }
}
 `);
 
 if (result.errors) {
  reporter.panic("failed to create posts", result.errors);
}


//------------------------------------------------------------------
const accessories = result.data.allNodeAccessory.edges;
const mobiles = result.data.allNodeMobilePhone.edges;
const articles = result.data.allNodeArticle.edges;
const faqs = result.data.allNodeFaq.edges;
const warrenties = result.data.allNodeWarranty.edges;
//------------------------------------------------------------------

accessories.forEach(accessoryData => 
{
  createPage({
    path: accessoryData.node.path.alias,
    component: path.resolve(`./src/templates/accessory.js`),
    context: { AccessoryId: accessoryData.node.id,},
  })
})


mobiles.forEach(mobileData =>
  {
  createPage({
      path: mobileData.node.path.alias,
      component: path.resolve(`./src/templates/mobile.js`),
      context: { MobileId: mobileData.node.id,},
    })
  })

articles.forEach(articleData =>
    {
    createPage({
        path: articleData.node.path.alias,
        component: path.resolve(`./src/templates/article.js`),
        context: { ArticleId: articleData.node.id,},
      })
    })


faqs.forEach(faqData =>
      {
      createPage({
          path: faqData.node.path.alias,
          component: path.resolve(`./src/templates/faq.js`),
          context: { FAQId: faqData.node.id,},
        })
      })  

warrenties.forEach(warrentyData =>
        {
        createPage({
            path: warrentyData.node.path.alias,
            component: path.resolve(`./src/templates/warrenty.js`),
            context: { WarrentyId: warrentyData.node.id,           
            },
          })
        })   
}
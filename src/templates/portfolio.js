import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
    max-width:100%;
    margin:16px 0;
`

export default ({pageContext}) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <strong>
            Website Url:  
        </strong>
        <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer">
            {pageContext.acf.portfolio_url}
        </a>
        <div>
        <FeaturedImage src={pageContext.featured_media.source_url}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    </Layout>
);
import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

const PortfolioItemsWrapper = styled.div`
    display:flex;
    justify-conent:center;
`
const PortfolioItemBox = styled.div`
    width:300px;
    border:1px solid #efefef;
    padding:16px;
    margin:16px;
`
const PortfolioImage = styled.img`
    max-width:100%;
`
const PortfolioItems = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
            edges {
                node{
                    id
                    slug
                    link
                    title
                    content
                    excerpt
                    featured_media {
                    source_url
                    }
                }
            }
            }
        } 
    `} render={props => (
    <PortfolioItemsWrapper>
        {props.allWordpressWpPortfolio.edges.map(PortfolioItem => (
            <PortfolioItemBox key={PortfolioItem.node.id}>
                <h2>{PortfolioItem.node.title}</h2>
                <PortfolioImage src={PortfolioItem.node.featured_media.source_url} alt=""/>
                <div dangerouslySetInnerHTML={{__html:PortfolioItem.node.excerpt}}/>
                <Link to={`/portfolio/${PortfolioItem.node.slug}`}>
                    Readmore
                </Link>
            </PortfolioItemBox>
        ))}
        </PortfolioItemsWrapper>)} />        
    )
}
export default PortfolioItems;
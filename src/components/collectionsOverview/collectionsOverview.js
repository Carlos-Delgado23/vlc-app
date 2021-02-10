import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import PreviewCollection from '../preview-collection/PreviewCollection'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector'

import { CollectionsOverviewContainer } from './collectionsOverview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))
    }
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)
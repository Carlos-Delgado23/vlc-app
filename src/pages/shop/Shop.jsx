import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview'
import CategoryPage from '../category/category'


const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
)


export default Shop
import React from 'react'
import { Switch , Route } from 'react-router'
import OrderList from './OrderList'

export default function Order() {
	return (
		<Switch>
			<Route  exact path="/seller/orders/all" component={OrderList}/>
			
		</Switch>
	)
}

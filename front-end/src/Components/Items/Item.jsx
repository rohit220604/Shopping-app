//import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import './Item.css'

// export class Item extends Component {
//   static propTypes = {}

//   render() {
//     return (
//       <div className="item">
//         <img src={props.image} alt="" />
//         <div className="item-prices">
//             <div className="item-price-new">
//                 {props.new_price}
//             </div>
//             <div className="item-price-old">
//                 {props.old_price}
//             </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Item

import React from 'react'

const Item = (props) => {
  return (
          <div className="item">
        <img src={props.image} alt="" />
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
      </div>
  )
}

export default Item
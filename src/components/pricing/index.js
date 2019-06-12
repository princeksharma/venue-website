import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

class Pricing extends Component {

 state = {
   prices: [100,150,250],
   positions:['Balcony','Medium','Star'],
   desc:[
      'Bronze','Silver',
      'Gold'
   ],
   linkto:['http://sales/b','http://sales/m','http://sales/s']
 }

 showBoxes = () => (
   this.state.prices.map((box,i) =>(
     <div className="pricing_item">
        <div className="pricing_inner_wrapper">
            <div className="pricing_title">
               <span>${this.state.prices[i]}</span>
               <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_descripiton">
               {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
               <MyButton
                  text = "Purchase"
                  bck="#ffa800"
                  color="ffffff"
                  link={this.state.linkto[i]}
               />
            </div>
        </div>
     </div>
   ))
 )

  render() {
    return(
      <div class="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>

        </div>
      </div>
    )
  }
}

export default Pricing;

import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton'

export default class Discount extends Component {

  state = {
    discountStart:0,
    discountEnd:30
  }

  percentage = () => {
     let start = this.state.discountStart; 
     let end   =  this.state.discountEnd ;
     if ( start < end ){
        this.setState({discountStart : start+1 })
     } 
     
  }

  componentDidUpdate () {
    setTimeout (()=> {
      this.percentage()
    },40)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          {/* Left part of the component*/ }
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div >
          </Fade>

           {/* Right part of the component*/ }
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta unt expicabo.</p>

               <MyButton  text="Purchase Tikets" 
                          size="medium" 
                          link="https://crhoy.com" 
                          bck="#ffa800" 
                          color="#ffffff"/>

            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

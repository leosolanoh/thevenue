import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';


class Countdown extends Component {
state = {
    deadline: 'Dec, 16, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds:'0'
}

timeLeft = () =>{
const arr = [   {value:this.state.days,text:'Days'},
                {value:this.state.hours,text:'Hs'},
                {value:this.state.minutes,text:'Min'},
                {value:this.state.seconds,text:'sec'}
            ];

return (
    <div className="countdown_bottom">

        {arr.map((val,id) =>
            <div key={id}>
                <div className="countdown_item">
                    <div className="countdown_time">
                        {val.value}
                    </div>
                    <div className="countdown_tag">{val.text}</div>
                </div>
            </div>
        )}
    </div>
)
} 

 getTimeUnteil() {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('Event has already finished')
        } 
        else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/1000*60*60)%24);
            const days = Math.floor(time/(1000*60*60*24));
          this.setState({
              days,
              hours,
              minutes,
              seconds
          })
        }   
   }

   componentDidMount (){
        setInterval(() => this.getTimeUnteil(),1000) ; 

}


render() {
    return(

        <Slide left delay={1000}> 
            <div className="countdown_wrapper">
                <div className="countdown_top" >
                    Event starts in
                        </div>
                {this.timeLeft()}
            </div>
        </Slide>
        
    )
    }
}

export default Countdown;
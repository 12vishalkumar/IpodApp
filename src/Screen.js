import React from 'react';

// importing all required components
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';

class Screen extends React.Component{

    render(){
        return(
            <div style={styles.screen} id='screen-container'>

                {/* rendring all components */}
                {this.props.activePage === 'Home' ? <Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage === 'Music' ? <Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage === 'Games' ? <Games /> : null}
                {this.props.activePage === 'Settings' ? <Settings /> : null}
                {this.props.activePage === 'MyMusic' ? <MyMusic audio={this.props.audio} /> : null}
                {this.props.activePage === 'Artists' ? <Artists /> : null}
                
            </div>
        );
    }
}

export default Screen;

// ipod screen
const styles = {
    screen : {
        height: '50%',
        width: '98%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: '2px solid black',
        borderRadius: '12px',
        position: 'relative',
        marginTop: '15px', 
        // backgroundImage: 'url("https://wallpapercave.com/wp/wp6196556.jpg")'
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCFaqM4P4UVMY_yQh8sqHhc3jebN_Qz2j3w&usqp=CAU")'
    }
}



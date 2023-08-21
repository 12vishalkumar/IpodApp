import React from 'react';
// importing song from assets folder
import sound from './assets/music/HuaHaiAajPahliBar.mp3' 

class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : false
        }
    }

     // lyfe cycle method
    componentDidMount(){
        let self = this;
        self.props.audio.play();

        self.props.audio.addEventListener("timeupdate", function(){
            if(self.state.isMounted){
                var pos = self.props.audio.currentTime/self.props.audio.duration;
                self.updateTime();
                let fill = document.getElementById("fill");
                // console.log(fill);
                if(fill !== null){
                    fill.style.width = pos*100 + "%";
                }
            }
        })
    }


    updateTime = () =>{
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = true;
    }

    render(){
        let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>

                <div style={styles.titleBar}>
                    <span style={styles.Heading}>iPod</span>
                    <img style={styles.batteryImg} src="https://cdn-icons-png.flaticon.com/128/2200/2200017.png"></img>
                </div>
                
                <div style={styles.SongContainer}>
                    <div style={styles.info}>
                        <img style={styles.image} src='https://s1.dmcdn.net/v/MyjLG1QNgDuKnI_AR/x240'></img>
                        <div style={styles.subInfo}>
                            <h4 style={styles.SongTitle}>Hua Hai Aaj...</h4>
                            <p style={styles.NameL}>Pulkit Samrat</p>
                            <p style={styles.NameJ}>Urvashi Rautela</p>
                        </div>   
                    </div>

                    <div style={styles.statusBar}>
                        <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                        <div style={styles.seekBar}>
                            <div style={styles.fill} id='fill'></div>
                        </div>
                        <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyMusic;

// music screen container
const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column'
    },

    // tittle bar
    titleBar : {
        height: '50px',
        width: '100%',
        backgroundColor: '#807c7c',
        borderBottom: '1px solid #6c757d',
        justifyContent : 'space-between',
        borderRadius:'10px 10px 0 0',
        display : 'flex',
        flexDirecton : 'row'
    },

    // main heading
    Heading: {
        color: 'cyan',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.7rem',
        marginTop: '0.3rem',
        marginLeft: '10rem'
    },

    // battery image
    batteryImg :{
        height: '1.7em',
        width: '1.8rem', 
        marginTop: '-0.3rem'
    },

    // songs container
    SongContainer: {
        width : '100%',
        height : '82%',
        backgroundColor: '#e7e9eb',
        borderRadius:'0 0 10px 10px',
    },

    // songs information
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },

    // song image
    image : {
        height : '100%',
        width : '55%',
        alignSelf : 'center',
        marginTop: '20px',
        borderRadius: '5px',
        marginLeft: '10Px'
    },

    // songs sub information
    subInfo : {
        height: '100%',
        width: '100%',
        alignSelf : 'center',
        marginTop: '20px',
        marginLeft: '10px',
    },

    // songs title
    SongTitle: {
        fontWeight: 'bold',
        marginTop: '20px'
    },

    // singer name
    NameL: {
        fontSize: '20px',
        marginTop: '20px'
    },

    // singer name
    NameJ: {
        fontSize: '20px',
        marginTop: '-12px'
    },

    // status bar
    statusBar : {
        width : '100%',
        height : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly',
        marginTop: '-20px'
    },

    // seek bar or duratuon od song
    seekBar : {
        width:'70%',
        height:'20px',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
        borderRadius: '10px',
    },

    // filling seek bar
    fill : {
        height: '99%',
        backgroundColor: 'royalblue',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px'
    },

    // current timing
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },

    // song duration or length
    dur : {
        margin : '0',
        alignSelf : 'center'
    },
}

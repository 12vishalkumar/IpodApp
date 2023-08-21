import React from 'react';

class Settings extends React.Component{
    render(){
        return(
            <div style={styles.settings} >
                <div style={styles.titleBar}>
                    <span style={styles.Heading}>iPod</span>
                    <img style={styles.batteryImg} src="https://cdn-icons-png.flaticon.com/128/2200/2200017.png"></img>
                </div>
                <div style={styles.SettingImage}>
                    <img style={styles.image} src="https://img.freepik.com/free-vector/illustration-cogwheel_53876-6326.jpg" />
                </div>
            </div>
        );
    }
    
}

export default Settings;

// setting screen
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
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

    // setting image
    SettingImage: {
        width : '100%',
        height : '82%',
        display:'flex',
        flexDirection : 'row',
        justifyContent: 'center'
    },

    // main setting image
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center',
        borderRadius:'0 0 10px 10px',
    },
}

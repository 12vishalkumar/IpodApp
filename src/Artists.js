import React from 'react';
import { Container } from 'react-bootstrap';

// importing creater image from asserts folder
import artistImage from './assets/images/Vishal.jpeg';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

                <div style={styles.titleBar}>
                    <span style={styles.Heading}>iPod</span>
                    <img style={styles.batteryImg} src="https://cdn-icons-png.flaticon.com/128/2200/2200017.png"></img>
                </div>
                <div style={styles.Profile}>
                    <div style={styles.info}>
                        <div style={styles.imageContainer}>
                        </div>
                        
                        <div style={styles.subInfo}>
                            <h4 style={styles.hiding}>IPod.js<span><img style={styles.image} src="https://cdn-icons-png.flaticon.com/128/919/919851.png" /></span></h4>
                            <p style={styles.Desc}>React Project</p>
                            <p style={styles.DescName}>Made by: <strong>Vishal Kumar</strong></p>
                        </div>
                    </div>

                    <div style={styles.info2}>
                        <h5 style={{alignSelf : 'center'}}>Thanks for visiting my app !!</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Artists;

// container
const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
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

    // profile 
    Profile: {
        width : '100%',
        height : '82%',
        backgroundColor: '#e7e9eb',
        borderRadius:'0 0 10px 10px',
    },

    // Profile information
    info : {
        height : '90%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
    },

    //  image Container
    imageContainer : {
        height: '90%',
        width: '40%',
        borderRadius : '50%',
        backgroundImage : `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center',
        marginTop: '-10px'
    },

    // sub infromation
    subInfo : {
        alignSelf : 'center'
    },

    // heading
    hiding: {
        padding: '5px',
        color: 'Black',
        textAlign: 'center',
        marginTop: '-60px',
    },

    // image
    image : {
        width: '1.8rem',
        height : '1.8rem',
        marginLeft: '10px'
    },

    // description
    Desc: {
        fontSize: '20px',
        fontWeight: '10px',
        color: 'Black',
    },

    // desccription name
    DescName: {
        fontSize: '18px',
        fontWeight: '15px',
        color: 'Black'
    },

    // other information
    info2 : {
        width : '100%',
        height : '30%',
        justifyContent : 'center',
        marginTop: '-10px'
    },
}




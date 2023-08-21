import React from 'react';

class Games extends React.Component{
    render(){
        return(
            <div style={styles.Gamescreen} >
                <div style={styles.ImgStyle}>
                    {/* game link */}
                    <img style={styles.image} src='https://media3.giphy.com/media/SAJm9EqSSGBMXOE9gE/giphy.gif?cid=ecf05e479adair7de3hjip6r3v3cah6h1gy37w017jhpw66n&ep=v1_gifs_related&rid=giphy.gif&ct=g' />
                </div>
            </div>
        );
    }
}

export default Games;

// game screen
const styles = {
    Gamescreen : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },

    // game image
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center',
        borderRadius: '10px',
    },

    // game styles
    ImgStyle: {
        width : '100%', 
        height : '100%',
    }
}

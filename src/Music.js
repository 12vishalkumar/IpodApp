import React from 'react';
// importing react bootstrap
import { ListGroup } from 'react-bootstrap';

class Music extends React.Component{

    render(){
        return(
            <div style={styles.musicScreen} id='music-screen'>
                <div style={styles.menuList} id='menu-list'>
                   <div style={styles.titleBar}>
                        <span style={styles.Heading}>iPod</span>
                        <img style={styles.batteryImg} src="https://cdn-icons-png.flaticon.com/128/2200/2200017.png"></img>
                    </div>

                    {/* rendring list sub group items */}
                    <ListGroup  style={{borderRadius:'0'}}>
                        <ListGroup.Item style={styles.ListGroup} className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={styles.Span}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={styles.ListGroup} className={this.props.activeItem==='Artists'?'active':''}>
                            Artists {this.props.activeItem==='Artists'?<span style={styles.Span}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default Music;

// musicScreen
const styles = {
    musicScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },

    // menu list
    menuList : {
        height : '100%',
        width : '45%',
        position: 'absolute',
        backgroundColor: 'rgb(108, 92, 182)',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    },

    // tittle bar
    titleBar : {
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        justifyContent : 'space-between',
        height: '50px',
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
        marginLeft: '4rem'
    },

    // battrey image
    batteryImg :{
        height: '1.7em',
        width: '1.8rem', 
        marginTop: '-0.3rem'
    },

    // list groups items
    ListGroup: {
        border: '0.2',
        padding: '1rem 0.2rem 1.2rem 1rem',
        height: '100%',
        marginTop: '0px',
        fontWeight:'bold',
    },

    // span
    Span: {
        float:'right',
        fontWeight:'bold',
        marginRight: '8px'
    },
}

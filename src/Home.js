import React from 'react';
// importing react botstrap
import { ListGroup } from 'react-bootstrap';


class Home extends React.Component{
    render(){
        return(
            <div style={styles.homeScreen}>
                <div style={styles.menuList} id='menu-list'>
                    <div style={styles.titleBar}>
                        <span style={styles.Heading}>iPod</span>
                        <img style={styles.batteryImg} src="https://cdn-icons-png.flaticon.com/128/2200/2200017.png"></img>
                    </div>
                    <div>
                        {/* rendring all list items */}
                        <ListGroup style={styles.ListGroup}>
                            <ListGroup.Item style={styles.ListGroup} className={this.props.activeItem==='NowPlaying'?'active':''}>
                                Play Sonngs {this.props.activeItem==='NowPlaying'?<span style={styles.Span}>&gt;</span>:''}
                            </ListGroup.Item>
                            <ListGroup.Item style={styles.ListGroup} className={this.props.activeItem==='Music'?'active':''}>
                                Music {this.props.activeItem==='Music'?<span style={styles.Span}>&gt;</span>:''}
                            </ListGroup.Item>
                            <ListGroup.Item style={styles.ListGroup} className={this.props.activeItem==='Games'?'active':''}>
                                Games {this.props.activeItem==='Games'?<span style={styles.Span}>&gt;</span>:''}
                            </ListGroup.Item>
                            <ListGroup.Item style={styles.ListGroup} className={this.props.activeItem==='Settings'?'active':''}>
                                Settings {this.props.activeItem==='Settings'?<span style={styles.Span}>&gt;</span>:''}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

// home screen
const styles = {
    homeScreen : {
        height : '100%',
        width: '100%',
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

    // battery image
    batteryImg :{
        height: '1.7em',
        width: '1.8rem', 
        marginTop: '-0.3rem'
    },

    // list groups
    ListGroup: {
        border: '0.2',
        padding: '1rem 0.2rem 1.2rem 0rem',
        height: '100%',
        marginTop: '-7.5px',
        fontWeight:'bold',
    },

    // span
    Span: {
        float:'right',
        fontWeight:'bold',
        marginRight: '8px'
    },
}

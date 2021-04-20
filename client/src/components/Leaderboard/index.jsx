import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '../Switch';
import { List, ListItem, Paper } from '@material-ui/core';
import { earnersData } from '../../mock/EarnersData';
import { issuersData } from '../../mock/issuersData';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    paddingLeft: '225px',
    '@media (max-width: 768px)' : {
      paddingLeft: '0',
    }
  },
  Leaderboard: {
    width: '100%',
    textAlign: 'center',
    '& > div': {
      paddingBottom: '2.5rem',
    }
  },
  panel: {
    marginTop: '4rem',
  },
  heading: {
    lineHeight: '1.3',
    fontWeight: '400',
    fontSize: '1.563rem',
    color: 'white',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '1.5rem',
  },
  action: {
    width: 'max-content',
    margin: '0 auto',
  },
  list: {
    padding: '0',
  },
  listItem: {
    padding: '1em',
    position: 'relative',
    borderRadius: '8px',
    marginTop: '-1px',
    "&:not(:last-child)::after" : {
      content: "''",
      position: 'absolute',
      bottom: 0,
      transform: 'translateX(-50%)',
      left: '50%',
      width: 'calc(100% - 1rem)',
      borderBottom: '1px solid #f2f4f8',
    }
  },
  paper: {
    maxWidth: '60rem',
    margin: '0 auto',
    padding: '1.5rem',
    minHeight: '25rem',
    maxHeight: '70vh',
    overflowY: 'scroll',
    borderRadius: '8px',
    marginBottom: '2rem',
    marginTop: '-2.5rem',
  },
  listWrap: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    '& > p': {
      fontSize: '1rem',
      minWidth: '1rem',
      textAlign: 'left',
      margin: '0',
      marginRight: '1.5rem',
      color: '#868e9c',
      fontWeight: '400',
      '@media (min-width: 35em)':{
        minWidth: '1.5rem',
        fontSize: '1.25rem',
      }
    }
    
  },
  listContent: {
    flex: '3 1',
    textAlign: 'left',
    '& > div': {
      margin: '0',
      minWidth: '0',
      display: 'inline-block',
    }
  },
  listValue: {
    paddingLeft: '1rem',
    display: 'inline',
    color: '#5b29c7',
    fontWeight: '400',
    '@media (min-width: 35em)': {
      fontSize: '1.25rem',
    }
  },
  profile: {
    margin: '0',
    minWidth: '0',
    display: 'flex',
    alignItems: 'center',
    color: '#4d94ff',
    cursor: 'pointer',
    textDecoration: 'none',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    hyphens: 'auto'
  },
  profileImage: {
    boxSizing: 'border-box',
    margin: '0px',
    minWidth: '0px',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '2px solid rgb(255, 255, 255)',
    boxShadow: "rgb(17 22 24 / 15%) 0px 3px 5px",
    overflow: "hidden",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    '& img' :{
      height: '40px',
      width: '40px',
      background: '#333'
    }
  },
  address: {
    display: 'flex',
    margin: '0',
    minWidth: '0',
    flexShrink: '0',
    paddingLeft: '8px',
    paddingTop: '0px',
    flexDirection: 'column',
  },
  addressName: {
    margin: '0',
    minWidth: '0',
    color: 'rgb(17, 22, 24)',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1',
    marginBottom: '4px',
  },
  addressValue: {
    boxSizing: 'border-box',
    margin: '0',
    minWidth: '0',
    color: 'rgb(77, 148, 255)',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1',
  }
}));
export default function Leaderboard(props) {
  const classes = useStyles();
  const [leaderboardData, setLeaderboardData] = useState(earnersData);
  const [activeTab, setActiveTab] = useState('Top Earners');
  useEffect(() => {
    setLeaderboardData(earnersData);
  }, []);
  const onActiveTabChange = (value) => {
    setActiveTab(value);
    if(value === 'Top Issuers') {
      //api call for top Issuers
      setLeaderboardData(issuersData);
      
    } else if (value === 'Top Earners') {
      //api call for top Earners
      setLeaderboardData(earnersData)
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.Leaderboard}>
        <div>
          <h1 className={classes.heading}>Leaderboard</h1>
          <div className={classes.action}>
            <Switch
              value={activeTab}
              onChange={onActiveTabChange}
              defaultValue="Top Earners"
              offValue="Top Earners"
              onValue="Top Issuers"
              selectedColor="white"
              unselectedColor="transparentWhite"
              backgroundColor="dark"
              switchColor="grey"
              size="large"
              curved
            />
          </div>
        </div>
        

        <div className={classes.panel}>
          <Paper elevation={2} className={classes.paper}>
            <List className={classes.list}>
              {leaderboardData.map((item, index) => {
                return (
                  <ListItem className={classes.listItem}>
                    <div className={classes.listWrap}>
                      <p>{index + 1}</p>
                      <div className={classes.listContent}>
                        <div>
                          <a className={classes.profile}>
                            <div className={classes.profileImage}>
                              <img src={item.profile_image} />
                            </div>
                            <div className={classes.address}>
                              <p className={classes.addressName}>{item.name}</p>
                              <p className={classes.addressValue}>{`${item.address.slice(1,7)}...${item.address.slice(-4)}`}</p>
                            </div>
                          </a>
                        </div>
                        
                      </div>
                      <div className={classes.listValue}>
                        ${item.total_usd.toFixed(2)}
                      </div>
                    </div>
                    
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </div>
      </div>
    </div>
  );
}

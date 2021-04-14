import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '../Switch';
import './leaderboard.scss';
import { Divider, List, ListItem, Paper } from '@material-ui/core';
import { earnersData } from '../../mock/EarnersData';
import { issuersData } from '../../mock/issuersData';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    paddingTop: '1em',
    paddingLeft: '225px',
  },
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
      <div className="leaderboard">
        <h1 className="heading">Leaderboard</h1>
        <div className="action">
          <Switch
            value={activeTab}
            onChange={onActiveTabChange}
            defaultValue="Top Earners"
            offValue="Top Earners"
            onValue="Top Issuers"
            selectedColor="white"
            unselectedColor="transparentWhite"
            backgroundColor="dark"
            switchColor="transparentWhite"
            size="large"
            curved
          />
        </div>

        <div className="panel">
          <Paper elevation={2}>
            <List>
              {leaderboardData.map((item, index) => {
                return (
                  <ListItem>
                    <div className="leaderboard__item">
                      <p>{index + 1}</p>
                      <div className="leaderboard__item--content">
                        <div className="profile">
                          <img src={item.profile_image} />
                        </div>
                        <div className="address">
                          <p className="address__name">{item.name}</p>
                          <p className="address__value">{`${item.address.slice(1,7)}...${item.address.slice(-4)}`}</p>
                        </div>
                      </div>
                      <div className="leaderboard__item--value">
                        ${item.total_usd.toFixed(2)}
                      </div>
                    </div>
                    <Divider />
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

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  switch: {
    position: 'relative',
    height: '1.5rem',
    width: '120px',
    borderRadius: '4px',
  },
  dark: {
    background: 'rgba(0,0,0, 0.25)',
  },
  large: {
    height: '2rem',
    width: '240px',
  },
  curved: {
    borderRadius: '2rem'
  },
  white: {
    color: 'white',
  },
  transparentWhite: {
    color: 'rgba(256, 256, 256, 0.3)',
  },
  grey: {
    backgroundColor: 'rgba(256, 256, 256, 0.3)',
  },
  switchLabel: {
    position: 'relative',
    zIndex: '2',
    float: 'left',
    width: '120px',
    lineHeight: '32px',
    fontSize: '0.875rem',
    textAlign: 'center',
    cursor: 'pointer',

  },
  switchLabelOff: {
    paddingLeft: '4px',
  },
  switchLabelOn: {
    paddingRight: '4px',
  },
  switchInput: {
    display: 'none',
    '&:checked + .switchLabelOn ~ .switchSelection': {
      left: '120px',
    }
  },
  switchSelection: {
    display: 'block',
    position: 'absolute',
    zIndex: '1',
    top: '2.5px',
    left: '4px',
    width: '116px',
    height: '26px',
    borderRadius: '12px',
    transition: 'left 0.15s ease-out',
  }

}))
export default function Switch(props) {
  const styles = useStyles();
  console.log(styles)
  const uuid = Math.random()*1e18;
  const {
    offValue,
    onValue,
    selectedColor,
    unselectedColor,
    backgroundColor,
    switchColor,
    value,
    defaultValue,
    size,
    curved
  } = props;
  const [stateValue, setStateValue] = useState(offValue);
  const onChange = e => {
    const value = e.target.value;
    setStateValue(value);
    props.onChange(value);
  };

    

    const currentValue = value || stateValue || defaultValue;
    let switchClass = `${styles.switch} ${styles[backgroundColor]} ${
      styles[size]
    }`;
    let offClass = `${styles.switchLabel} ${styles.switchLabelOff}`;
    let onClass = `${styles.switchLabel} ${styles.switchLabelOn} switchLabelOn`;

    if (curved) {
      switchClass += ` ${styles.curved}`;
    }

    let isOn = false;
    if (currentValue === onValue) {
      onClass += ` ${styles[selectedColor]}`;
      offClass += ` ${styles[unselectedColor]}`;
      isOn = true;
    }

    if (currentValue === offValue) {
      offClass += ` ${styles[selectedColor]}`;
      onClass += ` ${styles[unselectedColor]}`;
    }

    return (
      <div className={switchClass}>
        <input
          type="radio"
          className={styles.switchInput}
          name={uuid}
          value={offValue}
          id={uuid + 'off'}
          onChange={onChange}
          checked={!isOn}
        />
        <label htmlFor={uuid + 'off'} className={offClass}>
          {offValue}
        </label>
        <input
          type="radio"
          className={styles.switchInput}
          name={uuid}
          value={onValue}
          id={uuid + 'on'}
          onChange={onChange}
          checked={isOn}
        />
        <label htmlFor={uuid + 'on'} className={onClass}>
          {onValue}
        </label>
        <span className={`${styles.switchSelection} ${styles[switchColor]} switchSelection`} />
      </div>
    );
  }



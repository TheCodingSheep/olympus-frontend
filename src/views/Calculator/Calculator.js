import React from 'react'
import "./Calculator.scss"
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];
const PrettoSlider = withStyles({
  root: {
    color: '#0ae4b5',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'black',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,

  },
  rail: {
    height: 8,
    borderRadius: 4,
    color: "white",
    opacity: 1,

  },
})(Slider);

const Calculator = () => {
  return (
    <div id="calculator-view">
      <div className="calculator-card">
        <p className='calculator'>Calculator</p>
        <p className='subutitle'>Estimate your returns</p>
        <div className="columns">
          <div className="column rate-column">
            <p className='price-rate'>HEC Price</p>
            <p className='price'>$113.75</p>
          </div>
          <div className="column">
          </div>
          <div className="column rate-column">
            <p className='price-rate'>Current APY</p>
            <p className='price'>33254125.2%</p>
          </div>
          <div className="column"></div>
          <div className="column rate-column">
            <p className='price-rate'>Your sHEC Balance</p>
            <p className='price'>0 sHEC</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className='input-title'>sHEC Amount</p>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" className='price-field' type="text" placeholder="0" />

                <span class="icon is-small is-right has-text-left mr-3">
                  Max
                </span>
              </p>
            </div>
          </div>
          <div className="column">
            <p className='input-title'>APY(%)</p>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" className='price-field' type="text" placeholder="336571.66" />

                <span class="icon is-small is-right has-text-left mr-5">
                  Current
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className='input-title'>HEC price at purchase ($)</p>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" className='price-field' type="text" placeholder="113.75" />

                <span class="icon is-small is-right has-text-left mr-5">
                Current
                </span>
              </p>
            </div>

          </div>
          <div className="column">
            <p className='input-title'> Future HEC market price ($)</p>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" className='price-field' type="text" placeholder="113.75" />

                <span class="icon input-text is-small is-right  mr-5">
                  Current
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className='hec-price'>HEC price at purchase ($)</p>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
          </div>
        </div>
        <div className="columns">
          <div className="column investment-price">
            <div className="column is-11">
              <p className='expense mb-2'>Your initial investment</p>
              <p className='expense mb-2'>Current wealth</p>
              <p className='expense mb-2'>HEC rewards estimation</p>
              <p className='expense mb-2'>Potential return</p>
              <p className='expense'>Potential number of Tesla Roadsters</p>
            </div>
            <div className="column investment-price-rate">
              <p className='expense mb-2' >$0</p>
              <p className='expense mb-2'>$0</p>
              <p className='expense mb-2'>HEC</p>
              <p className='expense mb-2'>$0</p>
              <p className='expense'>$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator

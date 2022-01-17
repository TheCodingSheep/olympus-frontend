import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography as MuiTypography, withStyles } from "@material-ui/core";
import Social from "./Social";
import externalUrls from "./externalUrls";
import StakeIcon from "../../assets/icons/stake.svg";
import BondIcon from "../../assets/icons/bond.svg";
import DashboardIcon from "../../assets/icons/dashboardicon.svg";
import { ReactComponent as OlympusIcon } from "../../assets/icons/Powercity.svg";
import PoolTogetherIcon from "../../assets/icons/33-together.svg";
import { trim, shorten } from "../../helpers";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import useBonds from "../../hooks/Bonds";
import { Paper, Link, Box, Typography, SvgIcon } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import "./sidebar.scss";

function NavContent() {
  const [isActive] = useState();
  const address = useAddress();
  const { bonds } = useBonds();
  const { chainID } = useWeb3Context();

  const checkPage = useCallback((match, location, page) => {
    const currentPath = location.pathname.replace("/", "");
    if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
      return true;
    }
    if (currentPath.indexOf("stake") >= 0 && page === "stake") {
      return true;
    }
    if ((currentPath.indexOf("bonds") >= 0 || currentPath.indexOf("choose_bond") >= 0) && page === "bonds") {
      return true;
    }
    return false;
  }, []);

  return (
    <>
      <Box className="branding-header">
        <Link href="https://olympusdao.finance" target="_blank">
          <SvgIcon
            color="primary"
            component={OlympusIcon}
            viewBox="0 0 240 100"
            style={{ minWidth: "240px", minHeight: "98px", width: "220px" }}
          />
        </Link>

        {/* {address && (
          <div className="wallet-link">
            <Link href={`https://etherscan.io/address/${address}`} target="_blank">
              {shorten(address)}
            </Link>
          </div>
        )} */}
      </Box>
      <div className="border">
        <Paper className="dapp-sidebar">
          <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
            <div className="dapp-menu-top">
              <div className="dapp-menu-links">
                <div className="dapp-nav" id="navbarNav">
                  <Link
                    component={NavLink}
                    id="dash-nav"
                    to="/dashboard"
                    isActive={(match, location) => {
                      return checkPage(match, location, "dashboard");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6" className="nav-content">
                      <img style={{ paddingRight: "10px", position: "relative", top: "5px" }} src={DashboardIcon} />
                      Dashboard
                    </Typography>
                  </Link>

                  <Link
                    component={NavLink}
                    id="stake-nav"
                    to="/"
                    isActive={(match, location) => {
                      return checkPage(match, location, "stake");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6">
                      {/* <SvgIcon color="primary" component={StakeIcon} /> */}
                      <img style={{ position: "relative", top: "5px", paddingRight: "10px" }} src={StakeIcon} />
                      Stake
                    </Typography>
                  </Link>

                  <Link
                    component={NavLink}
                    id="olyzaps-nav"
                    to="/olyzaps"
                    isActive={(match, location) => {
                      return checkPage(match, location, "33-together");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6" className="nav-content">
                      <img style={{ position: "relative", top: "5px", paddingRight: "10px" }} src={PoolTogetherIcon} />
                      OlyZaps
                    </Typography>
                  </Link>

                  <Link
                    component={NavLink}
                    id="33-together-nav"
                    to="/33-together"
                    isActive={(match, location) => {
                      return checkPage(match, location, "33-together");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6" className="nav-content">
                      <img style={{ position: "relative", top: "5px", paddingRight: "10px" }} src={PoolTogetherIcon} />
                      Calculator
                    </Typography>
                  </Link>

                  <Link
                    component={NavLink}
                    id="bond-nav"
                    to="/bonds"
                    isActive={(match, location) => {
                      return checkPage(match, location, "bonds");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6" className="nav-content">
                      {/* <SvgIcon viewBox="0 0 20 20" component={BondIcon} /> */}
                      <img style={{ position: "relative", top: "5px", paddingRight: "10px" }} src={BondIcon} />
                      Bond
                    </Typography>
                  </Link>

                  <div className="dapp-menu-data discounts">
                    <div className="bond-discounts">
                      <Typography variant="body2">Bond discounts</Typography>
                      {bonds.map((bond, i) => (
                        <Link component={NavLink} to={`/bonds/${bond.name}`} key={i} className={"bond"}>
                          {!bond.bondDiscount ? (
                            <Skeleton variant="text" width={"150px"} />
                          ) : (
                            <Typography variant="body2">
                              {bond.displayName}
                              <span className="bond-pair-roi">
                                {bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%
                              </span>
                            </Typography>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Box className="dapp-menu-bottom" display="flex" justifyContent="space-between" flexDirection="column">
              <div className="dapp-menu-external-links">
                {Object.keys(externalUrls).map((link, i) => {
                  return (
                    <Link key={i} href={`${externalUrls[link].url}`} target="_blank">
                      <Typography variant="h6">{externalUrls[link].icon}</Typography>
                      <Typography variant="h6">{externalUrls[link].title}</Typography>
                    </Link>
                  );
                })}
              </div>
            </Box>
          </Box>
        </Paper>
      </div>
      <div className="dapp-menu-social">
        <Social />
      </div>
    </>
  );
}

export default NavContent;

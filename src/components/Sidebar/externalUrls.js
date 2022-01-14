import ForumIcon from "../../assets/icons/forum.svg";
import GovIcon from "../../assets/icons/governance.svg";
import DocsIcon from "../../assets/icons/docs.svg";
import BorrowIcon from "../../assets/icons/borrow.svg";
import { SvgIcon } from "@material-ui/core";

const externalUrls = [
  {
    title: "Forum",
    url: "https://forum.olympusdao.finance/",
    icon: <img style={{ paddingRight: "10px" }} src={ForumIcon} />,
  },
  {
    title: "Borrow",
    url: "https://olympusdao.canny.io/",
    icon: <img style={{ paddingRight: "10px" }} src={BorrowIcon} />,
  },
  {
    title: "Governance",
    url: "https://vote.olympusdao.finance/",
    icon: <img style={{ paddingRight: "10px" }} src={GovIcon} />,
  },
  {
    title: "Docs",
    url: "https://docs.olympusdao.finance/",
    icon: <img style={{ paddingRight: "10px" }} src={DocsIcon} />,
  },
];

export default externalUrls;

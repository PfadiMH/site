import delve from "dlv";
import axios from "axios";

import { getDataDependencies } from "./services/api";
import { redirectToHomepage, getData } from "../utils";

const Universals = ({ pageData }) => {
  const blocks = delve(pageData, "blocks");
  return <div></div>;
};

export async function getServerSideProps(context) {
  const slug = delve(context.query, "slug");

  try {
    const data = getData(slug);
    const res = await axios.get(delve(data, "data"));
    const json = await res.data;

    if (delve(json.data, "0") == null) {
      return redirectToHomepage();
    }

    const pageData = await getDataDependencies(delve(json.data, "0"));
    console.log(pageData);
    return {
      props: { pageData },
    };
  } catch (error) {
    return redirectToHomepage();
  }
}

export default Universals;
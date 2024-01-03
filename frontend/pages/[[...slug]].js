import delve from "dlv";

import { getDataDependencies } from "./services/api";
import { redirectToHomepage, getData } from "../utils";
import { getLocalizedParams } from "../utils/localize";

const Universals = ({ pageData }) => {
  const blocks = delve(pageData, "blocks");
  return <div></div>;
};

export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  try {
    const data = getData(slug, locale);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();

    if (!json.length) {
      return redirectToHomepage();
    }

    const pageData = await getDataDependencies(delve(json, "0"));
    console.log(pageData);
    return {
      props: { pageData },
    };
  } catch (error) {
    return redirectToHomepage();
  }
}

export default Universals;
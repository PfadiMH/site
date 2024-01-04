import delve from "dlv";
import axios from "axios";

import { getDataDependencies } from "./services/api";
import { redirectToHomepage, getPageData } from "../utils";
import ArticleLayout from "../components/layout types/article";
import BlockManager from "../components/shared/Blockmanager";

const Universals = ({ pageData }) => {
  const blocks = delve(pageData, "blocks");
  console.log(pageData.attributes.type);

  switch (pageData.attributes.type) {
    case "article":
      return (
        <ArticleLayout props={pageData.attributes}>
          <BlockManager blocks={blocks} />
        </ArticleLayout>
      );
    default:
      return (
        <div>
          <h1>404 - Article not found</h1>
        </div>
      );
  }
};

export async function getServerSideProps(context) {
  const slug = delve(context.query, "slug");

  try {
    const data = getPageData(slug);
    const res = await axios.get(delve(data, "data"));
    const json = await res.data;

    if (delve(json.data, "0") == null) {
      return redirectToHomepage();
    }

    const pageData = await getDataDependencies(delve(json.data, "0"));
    return {
      props: { pageData },
    };
  } catch (error) {
    return redirectToHomepage();
  }
}

export default Universals;
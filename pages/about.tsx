import type { NextPage } from "next";

import Layout from "@/components/layout/Layout";

import Meta from "@/utils/meta/Meta";
import About from "@/components/screens/About";

const AboutPage: NextPage = () => (
  <Meta title="About">
    <Layout>
      <About />
    </Layout>
  </Meta>
);

export default AboutPage;

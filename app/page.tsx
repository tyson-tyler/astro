import About from "@/components/about";
import Banner from "@/components/banner";
import Bul from "@/components/bul";
import Fun from "@/components/fun";
import Hello from "@/components/hello";
import Open from "@/components/open";

import Pag from "@/components/pag";
import Red from "@/components/red";
import Seven from "@/components/seven";
import CountdownTimer from "@/components/try";
import Video from "@/components/video";
import Videos from "@/components/videos";

import React from "react";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Banner />
      {/* <Video />
      <Seven />

     
     */}

      {/* <Fun />
      // 
      
      <Videos />
      // 
      */}
      {/* <Pag /> */}
      <Hello />
      <Fun />

      <About />
      <Bul />

      <Footer />
    </div>
  );
};

export default page;

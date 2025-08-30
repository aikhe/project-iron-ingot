import { useEffect, useState } from "react";
import Head from "../../components/Head";
import { usePrefetcer } from "../../components/Prefetcher";
import TopGradient from "../../components/TopGradient";
import { _Transition_Page } from "../../components/_Animations";
import { motion } from "framer-motion";
import Image from "next/image";
import AwardCard from "../../components/card/Award";

const Awards = () => {
  const { awards } = usePrefetcer();
  const [awardList, setAwardList] = useState([]);

  useEffect(() => {
    setAwardList(awards);
  }, [awards]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopGradient colorLeft={"#fd0101"} colorRight={"#a50000"} />
      <Head
        title="Awards | Ingo"
        description="Outstanding achievements and awards in the BSCS program. Celebrating student excellence in Computer Science."
        url="/awards"
      />

      <motion.main
        variants={_Transition_Page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="py-36 z-10 min-h-screen"
      >
        <div className="flex flex-col gap-2 justify-center mt-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Awards & Recognition
          </h1>
          <p className="text-center text-gray-500 mb-16">
            Celebrating excellence in the BSCS Program
          </p>

          {/* Add your awards content here */}
          <div className="flex flex-col gap-2 justify-center my-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {awardList.length > 0 &&
                awardList.map((awards, index) => (
                  <div key={index}>
                    <AwardCard award={awards} />
                  </div>
                ))}

              {awardList.length < 1 && (
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-lg font-semibold">
                    No award was uploaded yet. Check back later!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Awards;


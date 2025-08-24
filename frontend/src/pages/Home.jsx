import React from "react";
import { RiEarthquakeLine } from "react-icons/ri";
import Feature from "../components/Feature";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { TbReportAnalytics } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <section className="w-full">
        <div className="text-container mt-36 text-center w-1/2 mx-auto">
          <h1 className="text-6xl font-bricolage">
            Predict <span className="text-red-500">Disasters</span> Save Lives
            Empower Responders
          </h1>
          <p className="text-lg text-center mt-2 text-zinc-300">
            An AI-powered platform for real-time disaster prediction, risk
            assessment, and intelligent emergency response management.
          </p>
        </div>

        <div className="img-container w-[64%] h-[600px] bg-zinc-900 mx-auto mt-8 mb-16 rounded-lg overflow-hidden">
          <img className="w-full h-full object-bottom object-cover" src="bg.jpg" alt="" />
        </div>
      </section>

      <section className="w-full mb-16 px-16">
        <div className="text-row text-center w-1/2 mx-auto">
          <h2 className="text-5xl font-bricolage ">
            Built for <span className="text-red-500">Rapid</span> Response,
            Powered by AI
          </h2>
          <p className="text-lg text-zinc-300 mt-2">
            Our intelligent system equips emergency agencies and responders with
            cutting-edge tools to predict disasters, assess risks, and deploy
            resources—faster, smarter, and more accurately than ever before.
          </p>
        </div>

        <div className="w-full grid grid-cols-4 mt-8 gap-4">
          <Feature
            title={"AI-Powered Disaster Prediction"}
            description={
              "Accurately forecast floods, fires, and earthquakes using real-time and historical data with machine learning models."
            }
            icon={<RiEarthquakeLine className="text-7xl mb-2 text-red-500" />}
          />

          <Feature
            title={"Real-Time Early Warning Alerts"}
            description={
              "Instantly notify responders and communities when risk thresholds are crossed—powered by intelligent triggers and automated systems."
            }
            icon={<HiOutlineBellAlert className="text-7xl mb-2 text-red-500" />}
          />

          <Feature
            title={"Centralized Incident Reporting"}
            description={
              "Easily log, update, and monitor incidents from a single dashboard—ensuring full visibility and coordination across teams."
            }
            icon={<TbReportAnalytics className="text-7xl mb-2 text-red-500" />}
          />

          <Feature
            title={"Geolocation Based Risk Insights"}
            description={
              "Visualize affected areas, response zones, and risk levels using interactive maps and AI-assisted scoring to aid smart decision-making."
            }
            icon={<IoLocationOutline className="text-7xl mb-2 text-red-500" />}
          />
        </div>
      </section>
    </>
  );
};

export default Home;

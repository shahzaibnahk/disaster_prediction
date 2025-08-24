import React, { useState, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/profile/profileAction";
import toast from "react-hot-toast";
import {
  predictDisaster,
  predictRiskAssessment,
  predictClusterAssignment,
} from "../redux/predict/predictAction";
import ResultModal from "../components/ResultModal";

const Dashboad = ({ user, isAuthenticated }) => {
  const dispatch = useDispatch();

  const [modalResult, setModalResult] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  // Inputs
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [populationDensity, setPopulationDensity] = useState("");
  const [severityIndex, setSeverityIndex] = useState("");
  const [infrastructureScore, setInfrastructureScore] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const { predictedDisaster, riskResult, clusterResult } = useSelector(
    (state) => state.predict
  );

  useEffect(() => {
    if (predictedDisaster) {
      setModalTitle(`Disaster Prediction Result for ${user.name}`);
      setModalResult(predictedDisaster);
    }
  }, [predictedDisaster, user.name]);

  useEffect(() => {
    if (riskResult) {
      setModalTitle(`Risk Assessment Result`);
      setModalResult(riskResult);
    }
  }, [riskResult]);

  useEffect(() => {
    if (clusterResult) {
      setModalTitle(`Cluster Assignment Result`);
      setModalResult(clusterResult);
    }
  }, [clusterResult]);

  const handlePredictSubmit = (e) => {
    e.preventDefault();
    if (!humidity || !temperature || !rainfall || !windspeed) {
      toast.error("Please fill all fields for Predict Disaster");
      return;
    }

    dispatch(predictDisaster(humidity, temperature, rainfall, windspeed));
  };

  const handleRiskSubmit = (e) => {
    e.preventDefault();
    if (!populationDensity || !severityIndex || !infrastructureScore) {
      toast.error("Please fill all fields for Risk Assessment");
      return;
    }

    dispatch(
      predictRiskAssessment(
        populationDensity,
        severityIndex,
        infrastructureScore
      )
    );
  };

  const handleClusterSubmit = (e) => {
    e.preventDefault();
    if (!latitude || !longitude) {
      toast.error("Please fill all fields for Cluster Assignment");
      return;
    }

    dispatch(predictClusterAssignment(latitude, longitude));
  };

  return (
    <section className="w-full p-8">
      <div className="head flex items-center justify-between w-full px-4 py-5 bg-zinc-900 border border-zinc-800 rounded-lg">
        <h2 className="text-2xl font-bricolage">
          👋Welcome!{" "}
          <span className="text-red-500">{isAuthenticated && user.name}</span>
        </h2>
        <div>
          <button onClick={() => dispatch(logout())}>
            <AiOutlineLogout className="text-2xl cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Predict Disaster */}
      <div className="mt-8">
        <h3 className="text-2xl font-bricolage">Predict Disaster</h3>
        <form
          onSubmit={handlePredictSubmit}
          className="w-full grid grid-cols-4 mt-4 gap-4"
        >
          <label>
            <span className="inline-block mb-2">Humidity</span>
            <input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="Enter Humidity"
              className="input-style"
            />
          </label>
          <label>
            <span className="inline-block mb-2">Temperature</span>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Enter Temperature"
              className="input-style"
            />
          </label>
          <label>
            <span className="inline-block mb-2">Rainfall</span>
            <input
              type="number"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
              placeholder="Enter Rainfall"
              className="input-style"
            />
          </label>
          <label>
            <span className="inline-block mb-2">Windspeed</span>
            <input
              type="number"
              value={windspeed}
              onChange={(e) => setWindspeed(e.target.value)}
              placeholder="Enter Windspeed"
              className="input-style"
            />
          </label>
          <button type="submit" className="btn-red">
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* Risk Assessment */}
      <div className="mt-8">
        <h3 className="text-2xl font-bricolage">Risk Assessment</h3>
        <form
          onSubmit={handleRiskSubmit}
          className="w-full grid grid-cols-3 mt-4 gap-4"
        >
          <label>
            <span className="inline-block mb-2">Population Density</span>
            <input
              type="number"
              value={populationDensity}
              onChange={(e) => setPopulationDensity(e.target.value)}
              placeholder="Enter Population Density"
              className="input-style"
            />
          </label>
          <label>
            <span className="inline-block mb-2">Severity Index</span>
            <input
              type="number"
              value={severityIndex}
              onChange={(e) => setSeverityIndex(e.target.value)}
              placeholder="Enter Severity Index"
              className="input-style"
            />
          </label>
          <label>
            <span className="inline-block mb-2">Infrastructure Score</span>
            <input
              type="number"
              value={infrastructureScore}
              onChange={(e) => setInfrastructureScore(e.target.value)}
              placeholder="Enter Infrastructure Score"
              className="input-style"
            />
          </label>
          <button type="submit" className="btn-red">
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* Cluster Assignment */}
      <div className="mt-8">
        <h3 className="text-2xl font-bricolage">Cluster Assignment</h3>
        <form
          onSubmit={handleClusterSubmit}
          className="w-full grid grid-cols-2 mt-4 gap-4"
        >
          <label>
            <span className="inline-block mb-2">Latitude</span>
            <input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Enter Latitude"
              className="input-style"
            />
          </label>
          <label>
            <span className="inline-block mb-2">Longitude</span>
            <input
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Enter Longitude"
              className="input-style"
            />
          </label>
          <button type="submit" className="btn-red">
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* 🔹 Modal */}
      {modalResult && (
        <ResultModal
          title={modalTitle}
          result={modalResult}
          onClose={() => setModalResult(null)}
        />
      )}
    </section>
  );
};

export default Dashboad;

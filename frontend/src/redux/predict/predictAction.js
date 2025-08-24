import axios from "axios";
import {
    predictClusterFail,
    predictClusterRequest,
  predictClusterSuccess,
  predictDisasterFail,
  predictDisasterRequest,
  predictDisasterSuccess,
  predictRiskFail,
  predictRiskRequest,
  predictRiskSuccess,
} from "./predictSlice";

const aiServer = "http://localhost:8000";

export const predictDisaster =
  (humidity, temperature, rainfall, wind_speed) => async (dispatch) => {
    try {
      dispatch(predictDisasterRequest());

      const { data } = await axios.post(
        `${aiServer}/predict-disaster`,
        {
          humidity,
          temperature,
          rainfall,
          wind_speed,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(predictDisasterSuccess(data));
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Prediction failed";
      dispatch(predictDisasterFail(message));
    }
  };

export const predictRiskAssessment =
  (population_density, severity_index, infrastructure_score) =>
  async (dispatch) => {
    try {
      dispatch(predictRiskRequest());

      const { data } = await axios.post(
        `${aiServer}/risk-assessment`,
        {
          population_density,
          severity_index,
          infrastructure_score,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(predictRiskSuccess(data));
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Risk prediction failed";
      dispatch(predictRiskFail(message));
    }
  };
export const predictClusterAssignment =
  (latitude, longitude) => async (dispatch) => {
    try {
      dispatch(predictClusterRequest());

      const { data } = await axios.post(
        `${aiServer}/cluster-assign`,
        {
          latitude,
          longitude,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(predictClusterSuccess(data));
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Cluster assignment failed";
      dispatch(predictClusterFail(message));
    }
  };

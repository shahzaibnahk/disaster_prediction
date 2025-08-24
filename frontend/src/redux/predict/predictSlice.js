import { createSlice } from "@reduxjs/toolkit";

const predictSlice = createSlice({
  name: "predict",
  initialState: {
    // Disaster Prediction
    loading: false,
    error: null,
    message: null,
    predictedDisaster: null,

    // Risk Assessment
    riskLoading: false,
    riskError: null,
    riskResult: null,

    // Cluster Assignment
    clusterLoading: false,
    clusterError: null,
    clusterResult: null,
  },

  reducers: {
    // ===== Disaster Prediction =====
    predictDisasterRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    predictDisasterSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message || null;
      state.predictedDisaster =
        action.payload.predicted_disaster || action.payload;
    },
    predictDisasterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // ===== Risk Assessment =====
    predictRiskRequest: (state) => {
      state.riskLoading = true;
      state.riskError = null;
      state.riskResult = null;
    },
    predictRiskSuccess: (state, action) => {
      state.riskLoading = false;
      state.riskResult = action.payload;
    },
    predictRiskFail: (state, action) => {
      state.riskLoading = false;
      state.riskError = action.payload;
    },

    // ===== Cluster Assignment =====
    predictClusterRequest: (state) => {
      state.clusterLoading = true;
      state.clusterError = null;
      state.clusterResult = null;
    },
    predictClusterSuccess: (state, action) => {
      state.clusterLoading = false;
      state.clusterResult = action.payload;
    },
    predictClusterFail: (state, action) => {
      state.clusterLoading = false;
      state.clusterError = action.payload;
    },
  },
});

export const {
  // Disaster Prediction
  predictDisasterRequest,
  predictDisasterSuccess,
  predictDisasterFail,

  // Risk Assessment
  predictRiskRequest,
  predictRiskSuccess,
  predictRiskFail,

  // Cluster Assignment
  predictClusterRequest,
  predictClusterSuccess,
  predictClusterFail,
} = predictSlice.actions;

export default predictSlice.reducer;

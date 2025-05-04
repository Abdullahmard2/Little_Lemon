// src/utils/bookingUtils.js
export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00"];
  };
  
  export const updateTimes = (state, action) => {
    // For now, return the same static times (can be dynamic later)
    return initializeTimes();
  };
  
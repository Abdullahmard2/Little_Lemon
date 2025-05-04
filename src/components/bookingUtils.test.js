// src/utils/bookingUtils.test.js
import { initializeTimes, updateTimes } from "./bookingUtils";

test("initializeTimes returns correct time slots", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

test("updateTimes returns same times as current logic", () => {
  const currentState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2023-05-01" };
  const updated = updateTimes(currentState, action);
  expect(updated).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

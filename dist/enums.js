"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialType = exports.BestPriceLocation = exports.SweepStatus = exports.DayOfWeek = void 0;
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SUNDAY"] = 0] = "SUNDAY";
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY";
})(DayOfWeek || (exports.DayOfWeek = DayOfWeek = {}));
var SweepStatus;
(function (SweepStatus) {
    SweepStatus["INITIATED"] = "initiated";
    SweepStatus["RUNNING"] = "running";
    SweepStatus["SUCCESS"] = "success";
    SweepStatus["FAILED"] = "failed";
})(SweepStatus || (exports.SweepStatus = SweepStatus = {}));
var BestPriceLocation;
(function (BestPriceLocation) {
    BestPriceLocation["UNKNOWN"] = "unknown";
    BestPriceLocation["INSTORE"] = "instore";
    BestPriceLocation["ONLINE"] = "online";
    BestPriceLocation["BOTH"] = "both";
})(BestPriceLocation || (exports.BestPriceLocation = BestPriceLocation = {}));
var SpecialType;
(function (SpecialType) {
    SpecialType["HALF_PRICE"] = "half_price";
    SpecialType["DISCOUNTED"] = "discounted";
    SpecialType["MULTIBUY"] = "multibuy";
    SpecialType["ONLINE_ONLY"] = "online_only";
    SpecialType["INSTORE_ONLY"] = "instore_only";
})(SpecialType || (exports.SpecialType = SpecialType = {}));
//# sourceMappingURL=enums.js.map
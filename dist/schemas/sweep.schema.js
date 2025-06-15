"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SweepSchema = exports.Sweep = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../enums");
let Sweep = class Sweep {
};
exports.Sweep = Sweep;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Sweep.prototype, "storeCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: enums_1.SweepStatus,
        default: enums_1.SweepStatus.INITIATED,
        required: true,
    }),
    __metadata("design:type", String)
], Sweep.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], Sweep.prototype, "finishedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], Sweep.prototype, "dealsEndedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Sweep.prototype, "productCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Sweep.prototype, "errorMessage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Sweep.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Sweep.prototype, "updatedAt", void 0);
exports.Sweep = Sweep = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, _id: true })
], Sweep);
exports.SweepSchema = mongoose_1.SchemaFactory.createForClass(Sweep);
//# sourceMappingURL=sweep.schema.js.map
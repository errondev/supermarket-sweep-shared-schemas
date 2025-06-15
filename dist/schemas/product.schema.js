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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const price_schema_1 = require("./price.schema");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "storeCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Product.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "productUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Product.prototype, "packageSize", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Product.prototype, "categoryCodes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isRestricted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "isAvailable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: price_schema_1.PriceSchema, required: false }),
    __metadata("design:type", price_schema_1.Price)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Product.prototype, "originalImageUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Product.prototype, "imageUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map
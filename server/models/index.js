const Basket = require("./basket");
const BasketDevice = require("./basket-device");
const Brand = require("./brand");
const Device = require("./device");
const DeviceInfo = require("./device-info");
const Rating = require("./rating");
const Type = require("./type");
const TypeBrand = require("./type-brand");
const User = require("./user");

// У пользователя одна корзина
User.hasOne(Basket);
// Корзина принадлежит одному пользователю
Basket.belongsTo(User);

// У пользователя много оценок
User.hasMany(Rating);
// Оценка принадлежит одному пользователю
Rating.belongsTo(User);

// В корзине много товаров
Basket.hasMany(BasketDevice);
// Товар принадлежит одной корзине
BasketDevice.belongsTo(Basket);

// У типа много устройств
Type.hasMany(Device);
// Устройство принадлежит одному типу
Device.belongsTo(Type);

// У бренда много устройств
Brand.hasMany(Device);
// Устройство принадлежит одному бренду
Device.belongsTo(Brand);

// У устройства много оценок
Device.hasMany(Rating);
// Оценка принадлежит одному устройству
Rating.belongsTo(Device);

// Устройство может быть во многих корзинах
Device.hasMany(BasketDevice);
// Устройство в корзине принадлежит одному устройству
BasketDevice.belongsTo(Device);

// У устройства много полей с информацией
Device.hasMany(DeviceInfo, { as: "info" });
// Поле с информацией принадлежит одному устройству
DeviceInfo.belongsTo(Device);

Type.belongsToMany(
  Brand,
  { through: TypeBrand }
);
Brand.belongsToMany(
  Type,
  { through: TypeBrand }
);

module.exports = {
  Basket,
  BasketDevice,
  Brand,
  Device,
  DeviceInfo,
  Rating,
  Type,
  TypeBrand,
  User
};
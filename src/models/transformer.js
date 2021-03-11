"use strict";

const { Model } = require("objection");

class Transformer extends Model {
  static get tableName() {
    return "transformer";
  }
  static get relationMappings() {
    const { Service } = require("./service");
    return {
      sd: {
        relation: Model.BelongsToOneRelation,
        modelClass: Service,
        join: {
          from: "transformer.service",
          to: "service.id",
        },
      },
    };
  }
}

module.exports = {
  Transformer,
};

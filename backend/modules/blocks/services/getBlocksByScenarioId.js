import getBlockPopulate from "../helpers/getBlockPopulate.js";

export default async (props, options, context) => {

  const {
    scenarioId,
  } = props;

  let {
    isDeleted = false
  } = options;

  const { models } = context;

  const search = { scenario: scenarioId, isDeleted };

  const blocks = await models.Block.find(search).sort('sortOrder').populate(getBlockPopulate());

  return {
    blocks
  };

};
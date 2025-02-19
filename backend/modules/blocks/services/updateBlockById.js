import getBlockPopulate from "../helpers/getBlockPopulate.js";
import getBlockItemsPopulate from "../helpers/getBlockItemsPopulate.js";

export default async (props, options, context) => {

  const { blockId, update } = props;

  const { models } = context;

  const block = await models.Block.findByIdAndUpdate(blockId, update, { new: true }).populate(getBlockPopulate()).populate(getBlockItemsPopulate());

  if (!block) throw { message: 'This block does not exist', statusCode: 404 };

  return block;

};
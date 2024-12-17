export default async (props, options, context) => {

  const { scenario, triggerType, elementRef, event } = props;

  const { models, user } = context;

  let elementTriggerItems = await models.Trigger.find({ scenario, triggerType, elementRef, event, isDeleted: false });

  const sortOrder = elementTriggerItems.length;

  const newTriggerObject = {
    scenario,
    triggerType,
    elementRef,
    event,
    sortOrder,
    createdBy: user._id,
  };

  const trigger = await models.Trigger.create(newTriggerObject);

  return trigger;

};
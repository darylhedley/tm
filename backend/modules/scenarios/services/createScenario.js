export default async (props, options, context) => {

  const { name, accessType } = props;
  const { models, user } = context;

  if (!name) throw { message: "A scenario must have a name", statusCode: 400 };

  const newScenarioObject = {
    name,
    accessType,
    createdBy: user._id,
    collaborators: [{
      user: user._id,
      role: 'OWNER'
    }]
  };

  const scenario = await models.Scenario.create(newScenarioObject);

  return scenario;

};
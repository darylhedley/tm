export default async (props, options, context) => {

  const { slideId } = props;

  const { models, user } = context;

  const slide = await models.Slide.findByIdAndUpdate(slideId, {
    isDeleted: true,
    deletedAt: new Date(),
    deletedBy: user._id
  }, { new: true });

  if (!slide) throw { message: 'This slide does not exist', statusCode: 404 };

  const scenarioSlides = await models.Slide.find({ scenario: slide.scenario, isDeleted: false }).sort('sortOrder');

  let sortOrder = 0;
  for (const scenarioSlide of scenarioSlides) {
    scenarioSlide.sortOrder = sortOrder;
    sortOrder++;
    await scenarioSlide.save();
  }

  return slide;

};
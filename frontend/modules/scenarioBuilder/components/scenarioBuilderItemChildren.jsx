import React from 'react';
import map from 'lodash/map';
import ScenarioBuilderItemContainer from '../containers/scenarioBuilderItemContainer';
import getCache from '~/core/cache/helpers/getCache';

const ScenarioBuilderItemChildren = ({
  children,
  slideSelection,
  newLayerIndex,
  childrenOffset,
  isEditing,
  isEditingChildren
}) => {
  return (
    <div className="flex justify-start pt-10 pb-7 w-64 transition-transform duration-500" style={{
      transform: `translateX(${childrenOffset}px)`,
      marginLeft: isEditing ? '128px' : isEditingChildren ? '-128px' : '0px',
    }}>
      {map(children, (ref, index) => {
        const childSlide = getCache('slides').data.find(s => s.ref === ref);
        const isSelected = slideSelection[newLayerIndex] === index;
        return (
          <div
            key={childSlide._id}
            className="mr-4"
          >
            <ScenarioBuilderItemContainer
              slide={childSlide}
              itemIndex={index}
              layerIndex={newLayerIndex}
              isSelected={isSelected}
              slideSelection={slideSelection}
            />
          </div>
        )
      })}
    </div>
  );
};

export default ScenarioBuilderItemChildren;
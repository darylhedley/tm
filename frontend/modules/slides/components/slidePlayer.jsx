import React from 'react';
import TextBlockPlayerContainer from '~/modules/blocks/containers/textBlockPlayerContainer';
import Loading from '~/uikit/loaders/components/loading';
import map from 'lodash/map';
import PromptBlockPlayerContainer from '~/modules/blocks/containers/promptBlockPlayerContainer';
import ActionsBlockPlayerContainer from '~/modules/blocks/containers/actionsBlockPlayerContainer';
import getBlockTracking from '~/modules/tracking/helpers/getBlockTracking';
import find from 'lodash/find';
import getCache from '~/core/cache/helpers/getCache';
import FlatButton from '~/uikit/buttons/components/flatButton';
const BLOCK_MAPPINGS = {
  "TEXT": TextBlockPlayerContainer,
  "PROMPT": PromptBlockPlayerContainer,
  "ACTIONS": ActionsBlockPlayerContainer
}

const SlidePlayer = ({
  activeSlide,
  activeBlocks,
  isLoading,
  onUpdateTracking,
  navigateTo,
}) => {
  if (!activeSlide || isLoading) return (
    <Loading />
  );
  return (
    <div className="w-full border border-lm-2 dark:border-dm-2 rounded max-w-screen-sm p-4">
      {map(activeBlocks, (block) => {
        let Block = BLOCK_MAPPINGS[block.blockType];
        if (!Block) return <div key={block._id} className="mb-4 last:mb-0">Block is unsupported</div>;
        const blockTracking = getBlockTracking({ blockRef: block.ref });

        if (blockTracking.isHidden) return null;

        return (
          <div
            key={block._id}
            className="mb-4 last:mb-0"
          >
            <Block
              block={block}
              tracking={blockTracking}
              onUpdateTracking={(update) => {
                onUpdateTracking({ update, blockRef: block.ref });
              }}
              navigateTo={navigateTo}
            />
          </div>
        );
      })}
      {(activeSlide.children.length > 0) && (
        <div className="mt-4 flex items-center">
          {map(activeSlide.children, (childRef) => {
            const childSlide = find(getCache('slides').data, { ref: childRef });
            console.log(childSlide);
            return (<div>
              <FlatButton
                text={childSlide.name}
                onClick={() => navigateTo({ slideRef: childRef })}
              />
            </div>)
          })}
        </div>
      )}
    </div >
  );
};

export default SlidePlayer;
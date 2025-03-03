import React from 'react';
import Loading from '~/uikit/loaders/components/loading';
import map from 'lodash/map';
import getBlockTracking from '~/modules/tracking/helpers/getBlockTracking';
import find from 'lodash/find';
import getCache from '~/core/cache/helpers/getCache';
import FlatButton from '~/uikit/buttons/components/flatButton';
import Body from '~/uikit/content/components/body';
import getBlockComponent from '~/modules/blocks/helpers/getBlockComponent';

const SlidePlayer = ({
  activeSlide,
  activeBlocks,
  isLoading,
  onUpdateTracking,
  navigateTo,
  tracking,
}) => {
  if (!activeSlide || isLoading) return (
    <Loading />
  );

  return (
    <div className="w-full bg-lm-0 dark:bg-dm-1 border border-lm-2 dark:border-dm-2 rounded max-w-screen-sm p-4">
      {map(activeBlocks, (block) => {
        let Block = getBlockComponent({ blockType: block.blockType });
        if (!Block) return <div key={block._id} className="mb-4 last:mb-0 border p-2 border-lm-3 dark:border-dm-3 text-center">Block is unsupported</div>;
        const blockTracking = getBlockTracking({ blockRef: block.ref });

        if (blockTracking.isHidden) return null;

        return (
          <div
            key={block._id}
            className="mb-8 last:mb-0"
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
      {(tracking.feedbackItems && tracking.feedbackItems.length > 0) && (
        <div className="bg-blue-200 bg-opacity-30 border border-blue-200 p-2 rounded-md dark:text-gray-200 text-gray-800">
          {map(tracking.feedbackItems, (feedbackItem, index) => {
            return (
              <Body key={index} body={feedbackItem} />
            )
          })}
        </div>
      )}
      {(activeSlide.children.length > 0) && (
        <div className="mt-4">
          {map(activeSlide.children, (childRef) => {
            const childSlide = find(getCache('slides').data, { ref: childRef });
            if (!childSlide) return null;
            return (
              <div key={childRef}>
                <FlatButton
                  text={childSlide.name}
                  className="border bg-lm-2 dark:bg-dm-2 border-lm-2 dark:border-dm-2 p-2 w-full mb-2 rounded-md"
                  onClick={() => navigateTo({ slideRef: childRef })}
                />
              </div>
            );
          })}
        </div>
      )}
    </div >
  );
};

export default SlidePlayer;
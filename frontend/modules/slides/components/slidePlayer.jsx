import React from 'react';
import Loading from '~/uikit/loaders/components/loading';
import map from 'lodash/map';
import getBlockTracking from '~/modules/run/helpers/getBlockTracking';
import Body from '~/uikit/content/components/body';
import getBlockComponent from '~/modules/blocks/helpers/getBlockComponent';
import SlidePlayerNavigation from './slidePlayerNavigation';
import SlidePlayerHeader from './slidePlayerHeader';
import SummarySlide from './summarySlide';
import ConsentSlide from './consentSlide';
import getSlideFeedbackItems from '~/modules/run/helpers/getSlideFeedbackItems';

const SlidePlayer = ({
  scenario,
  activeSlide,
  activeBlocks,
  navigateTo,
  run = {},
  isLoading,
  isMenuOpen,
  primaryAction,
  secondaryAction,
  onActionClicked,
  onUpdateBlockTracking,
  onMenuClicked,
  onMenuActionClicked
}) => {
  if (!activeSlide || isLoading) return (
    <Loading />
  );

  const slideFeedbackItems = getSlideFeedbackItems();

  return (
    <div className="w-full bg-lm-0 dark:bg-dm-1 border border-lm-2 dark:border-dm-2 rounded ">
      <SlidePlayerHeader
        activeSlide={activeSlide}
        isMenuOpen={isMenuOpen}
        onMenuClicked={onMenuClicked}
        onMenuActionClicked={onMenuActionClicked}
      />
      <div className="px-4 pb-4">
        {(activeSlide.slideType === 'CONSENT') && (
          <ConsentSlide scenario={scenario} />
        )}
        {(activeSlide.slideType === 'SUMMARY') && (
          <SummarySlide scenario={scenario} />
        )}
        {map(activeBlocks, (block) => {
          let Block = getBlockComponent({ blockType: block.blockType });
          if (!Block) return <div key={block._id} className="mb-4 last:mb-0 border p-2 border-lm-3 dark:border-dm-3 text-center">Block is unsupported</div>;
          let blockTracking = {}
          if (activeSlide.slideType !== 'CONSENT') {
            blockTracking = getBlockTracking({ blockRef: block.ref });
          }

          if (blockTracking.isHidden) return null;

          return (
            <div
              key={block._id}
              className="mb-8 last:mb-0 p-4 bg-lm-2 rounded-md dark:bg-dm-2"
            >
              <Block
                block={block}
                blockTracking={blockTracking}
                onUpdateBlockTracking={(update) => {
                  onUpdateBlockTracking({ update, blockRef: block.ref });
                }}
                navigateTo={navigateTo}
              />
            </div>
          );
        })}
        {(slideFeedbackItems && slideFeedbackItems.length > 0) && (
          <div className="bg-blue-200 bg-opacity-30 border border-blue-200 p-2 rounded-md dark:text-gray-200 text-gray-800">
            {map(slideFeedbackItems, (feedbackItem, index) => {
              return (
                <Body key={index} body={feedbackItem} />
              )
            })}
          </div>
        )}
      </div>
      <SlidePlayerNavigation
        activeSlide={activeSlide}
        navigateTo={navigateTo}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        onActionClicked={onActionClicked}
      />
    </div >
  );
};

export default SlidePlayer;
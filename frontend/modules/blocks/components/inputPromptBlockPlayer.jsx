import React from 'react';
import getString from '~/modules/ls/helpers/getString';
import Button from '~/uikit/buttons/components/button';
import Body from '~/uikit/content/components/body';
import InputPromptTextBlockPlayer from './inputPromptTextBlockPlayer';
import InputPromptAudioBlockPlayer from './inputPromptAudioBlockPlayer';
import Required from '~/uikit/alerts/components/required';

const InputPromptBlockPlayer = ({
  block,
  tracking,
  hasAudioLoaded,
  isAudioDisabled,
  isResponseBlock,
  onTextInputChanged,
  onAudioLoaded,
  onAudioRecorded,
  onPermissionDenied
}) => {
  return (
    <div>
      <div className="mb-2 relative">
        <Body body={getString({ model: block, field: 'body' })} />
        <div className="absolute -top-3 right-0">
          <Required isRequired={block.isRequired} isComplete={tracking.isAbleToComplete} />
        </div>
      </div>

      {(block.inputType === 'AUDIO' && !isAudioDisabled) && (
        <InputPromptAudioBlockPlayer
          block={block}
          tracking={tracking}
          isResponseBlock={isResponseBlock}
          hasAudioLoaded={hasAudioLoaded}
          onAudioLoaded={onAudioLoaded}
          onAudioRecorded={onAudioRecorded}
          onPermissionDenied={onPermissionDenied}
        />
      )}

      {(block.inputType === 'TEXT' || isAudioDisabled) && (
        <InputPromptTextBlockPlayer
          block={block}
          tracking={tracking}
          isResponseBlock={isResponseBlock}
          onTextInputChanged={onTextInputChanged}
        />
      )}

    </div >
  );
};

export default InputPromptBlockPlayer;
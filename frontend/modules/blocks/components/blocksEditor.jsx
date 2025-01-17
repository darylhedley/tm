import React from 'react';
import BlocksEditorItem from './blocksEditorItem';
import map from 'lodash/map';
import FlatButton from '~/uikit/buttons/components/flatButton';

const BlocksEditor = ({
  blocks,
  selectedBlockId,
  isEditingBlock,
  onDeleteBlockClicked,
  onSortUpClicked,
  onSortDownClicked,
  onCancelEditBlockClicked,
  onEditBlockClicked,
  onCreateBlockClicked
}) => {
  return (
    <div className="w-full py-4 max-w-screen-sm">
      <div className="group/blocks">
        {map(blocks, (block) => {

          const isSelected = (block._id === selectedBlockId);

          const isEditing = isEditingBlock && isSelected;

          return (
            <BlocksEditorItem
              key={block._id}
              block={block}
              isSelected={isSelected}
              isEditing={isEditing}
              isLastBlock={block.sortOrder === blocks.length - 1}
              onDeleteBlockClicked={onDeleteBlockClicked}
              onSortUpClicked={onSortUpClicked}
              onSortDownClicked={onSortDownClicked}
              onCancelEditBlockClicked={onCancelEditBlockClicked}
              onEditBlockClicked={onEditBlockClicked}
            />
          );
        })}
      </div>
      <div>
        <FlatButton
          text="Create block"
          icon="create"
          onClick={onCreateBlockClicked}
        />
      </div>
    </div>
  );
};

export default BlocksEditor;
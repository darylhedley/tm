import React from 'react';
import FlatButton from '~/uikit/buttons/components/flatButton';
import Icon from '~/uikit/icons/components/icon';

const TriggerDisplay = ({
  eventDescription,
  onOpenTriggerPanelClicked
}) => {
  return (
    <div className=" bg-dm-2 text-xs rounded flex items-center overflow-auto">
      <div className="bg-dm-3 p-4 mr-2 border-r border-dm-3">
        <Icon icon="trigger" size="12" />
      </div>
      <div>
        <FlatButton text={`${eventDescription}: 0 triggers`} size="sm" onClick={onOpenTriggerPanelClicked} />
      </div>
    </div>
  );
};

export default TriggerDisplay;
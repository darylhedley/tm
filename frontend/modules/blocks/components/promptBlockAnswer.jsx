import React from 'react';
import classnames from 'classnames';
import getString from '~/modules/ls/helpers/getString';
import Body from '~/uikit/content/components/body';

const PromptBlockAnswer = ({
  item,
  isMultiSelect,
  isSelected,
  isComplete,
  onAnswerClicked
}) => {
  const inputType = isMultiSelect ? 'checkbox' : 'radio';

  return (
    <label
      key={item._id}
      className={classnames("flex items-center rounded-md mb-2 cursor-pointer -outline-offset-2 outline outline-2 outline-transparent",
        "border-2 border-lm-2 dark:border-dm-2 p-4",
        "last:mb-0",
        {
          "outline-2 hover:outline-lm-3 dark:hover:outline-dm-3": !isSelected && !isComplete,
          "outline-2  outline-primary-regular dark:outline-primary-light": isSelected,
        }
      )}
    >
      <div className="mr-4">
        <input type={inputType} disabled={isComplete} checked={isSelected} className=" accent-primary-regular dark:accent-primary-light disabled:accent-primary-regular dark:disabled:accent-primary-light" onChange={() => onAnswerClicked(item.value)} />
      </div>
      <div>
        <Body body={getString({ model: item, field: "text" })} />
      </div>
    </label>
  );
};

export default PromptBlockAnswer;
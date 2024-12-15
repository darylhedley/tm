import React from 'react';
import FormContainer from '~/core/forms/containers/formContainer';

const EditSlide = ({
  schema,
  slide,
  isLoading,
  onSlideFormUpdate
}) => {
  return (
    <div className="p-3">
      <FormContainer
        schema={schema}
        model={slide}
        onUpdate={onSlideFormUpdate}
      />
    </div>
  );
};

export default EditSlide;
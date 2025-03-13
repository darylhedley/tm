import React from 'react';
import BlocksEditorContainer from '~/modules/blocks/containers/blocksEditorContainer';
import CreateWorkspaceToolbarContainer from '../containers/createWorkspaceToolbarContainer';
import SlidePlayerContainer from '~/modules/slides/containers/slidePlayerContainer';
import ScenarioPreviewContainer from '~/modules/scenarios/containers/scenarioPreviewContainer';

const CreateWorkspace = ({
  activeSlideRef,
  displayMode
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
        <CreateWorkspaceToolbarContainer />
      </div>
      {(displayMode === 'EDITING') && (
        <div className="pt-10 w-full h-full overflow-y-auto">
          <BlocksEditorContainer />
        </div>
      )}
      {(displayMode === 'PREVIEW') && (
        <div className="pt-10 w-full h-full overflow-y-auto">
          <div className="w-full pt-4 pb-8 px-8 max-w-screen-sm mx-auto">
            <ScenarioPreviewContainer slideRef={activeSlideRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateWorkspace;
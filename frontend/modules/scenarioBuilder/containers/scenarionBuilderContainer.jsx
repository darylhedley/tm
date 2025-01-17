import React, { Component } from 'react';
import ScenarioBuilder from '../components/scenarioBuilder';
import WithRouter from '~/core/app/components/withRouter';
import WithCache from '~/core/cache/containers/withCache';
import find from 'lodash/find';
import getSlideSelectionFromQuery from '../helpers/getSlideSelectionFromQuery';

class ScenarionBuilderContainer extends Component {

  getRootSlide = () => {
    const rootSlide = find(this.props.slides.data, { isRoot: true });
    return rootSlide;
  }

  render() {
    const { displayMode } = this.props.editor.data;
    return (
      <ScenarioBuilder
        displayMode={displayMode}
        rootSlide={this.getRootSlide()}
        slideSelection={getSlideSelectionFromQuery()}
      />
    );
  }
};

export default WithRouter(WithCache(ScenarionBuilderContainer, null, ['editor', 'scenario', 'slides']));
import getTotalPages from '#core/app/helpers/getTotalPages.js';
import getSearchFromSearchValue from '#core/app/helpers/getSearchFromSearchValue.js';
import getModelPaginationByCurrentPage from '#core/app/helpers/getModelPaginationByCurrentPage.js';

export default async (props, options, context) => {

  const {
    accessType = null
  } = props;

  let {
    searchValue = '',
    currentPage = 1,
    isDeleted = false,
  } = options;

  const { models } = context;

  let search = { isDeleted };
  let searchOptions = {};

  if (searchValue.length) {
    getSearchFromSearchValue(searchValue, ['name'], search);
  }

  if (currentPage) {
    currentPage = parseInt(currentPage);
    getModelPaginationByCurrentPage(currentPage, searchOptions);
  }

  if (accessType) {
    search.accessType = accessType;
  }

  const count = await models.Scenario.countDocuments(search);

  const totalPages = getTotalPages(count);

  const scenarios = await models.Scenario.find(search, null, searchOptions).sort('name');

  return {
    scenarios,
    count,
    currentPage,
    totalPages
  };

};
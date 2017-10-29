import {
  DOWNLOAD_DATA_SUCCESS,
  DOWNLOAD_DATA_START,
  DOWNLOAD_DATA_FAIL,
  RESET_DATA,
  USER_ORDER_TYPE_FILTER,
  USER_FILTER_START
} from './types';

export const downloadData = ({ itemName, courseType, navigateTo }) => {
    return async (dispatch) => {
        dispatch({ type: RESET_DATA })
        var urlRequest = '';
        console.log('AVVIO AZIONE DOWNLOAD');
        dispatch({ type: DOWNLOAD_DATA_START });
        if (courseType === 'all' && itemName !== '') {
          urlRequest = 'https://demomobile.docebosaas.com/learn/v1/catalog?type[]=webinar&type[]=mobile&type[]=classroom&type[]=elearning&type[]=learning_plan&search_text=' + itemName;
        } else if (itemName === '' && courseType === 'all') {
          urlRequest = 'https://demomobile.docebosaas.com/learn/v1/catalog?type[]=webinar&type[]=mobile&type[]=classroom&type[]=elearning&type[]=learning_plan';
        } else if (itemName !== '' && courseType !== 'all') {
          urlRequest = 'https://demomobile.docebosaas.com/learn/v1/catalog?type[]=' + courseType + '&search_text=' + itemName;
        } else {
          urlRequest = 'https://demomobile.docebosaas.com/learn/v1/catalog?type[]=' + courseType;
        }
        console.log(urlRequest);
        await fetch(urlRequest, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((dataDownload) => {
          console.log(dataDownload.data.total_page_count)
          for (let page = 1; page <= dataDownload.data.total_page_count; page++) {
          fetch(urlRequest + '&page=' + page, {
              method: 'GET',
            })
            .then((response) => response.json())
            .then((recursiveDataDownload) => {
              if (recursiveDataDownload.data.items !== []) {
                dispatch({ type: DOWNLOAD_DATA_SUCCESS, payload: recursiveDataDownload.data.items });
              }
            })
          }
          navigateTo('list');
        })
      .catch(error => dispatch({ type: DOWNLOAD_DATA_FAIL, payload: error }));
    };
}

export const filterOrderByType = ({ radioSelect_AtoZ, radioSelect_ZtoA, courseType, navigateTo }) => {
  return (dispatch) => {
    dispatch({ type: USER_FILTER_START })
    navigateTo('list');
    if (radioSelect_AtoZ === true && radioSelect_ZtoA === false) {
        dispatch({ type: USER_ORDER_TYPE_FILTER, payload: { filterOrder: 'AtoZ', filterType: courseType } });
    } else if (radioSelect_AtoZ === false && radioSelect_ZtoA === true) {
        dispatch({ type: USER_ORDER_TYPE_FILTER, payload: { filterOrder: 'ZtoA', filterType: courseType } });
    }

  };
};

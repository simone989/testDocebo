import {
  DOWNLOAD_DATA_SUCCESS,
  DOWNLOAD_DATA_START,
  DOWNLOAD_DATA_FAIL,
} from './types';

export const downloadData = ({ itemName, courseType, navigateTo }) => {
    return (dispatch) => {
        var urlRequest = '';
        console.log('AVVIO AZIONE DOWNLOAD')
        dispatch({ type: DOWNLOAD_DATA_START });
        if (courseType === 'all') {
          urlRequest = 'https://demomobile.docebosaas.com/learn/v1/catalog?type[]=webinar&type[]=mobile&type[]=classroom&type[]=elearning&type[]=learning_plan&search_text=' + itemName;
        } else {
          urlRequest = 'https://demomobile.docebosaas.com/learn/v1/catalog?type[]=' + courseType + '&search_text=' + itemName;
        }
        console.log(urlRequest);
        fetch(urlRequest, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((dataDownload) => {
          console.log(dataDownload.data.items);
          dispatch({ type: DOWNLOAD_DATA_SUCCESS, payload: dataDownload.data.items });
          //navigateTo('home2');
        })
      .catch(error => dispatch({ type: DOWNLOAD_DATA_FAIL, payload: error }));
    };
}

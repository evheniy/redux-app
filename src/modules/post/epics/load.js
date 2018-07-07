import 'rxjs';
import 'rxjs-compat';
import { Observable } from 'rxjs/Observable';

import axios from 'axios';

import {
  POST_LOAD,
  loadedAction,
  titleAction,
  bodyAction,
  errorAction,
} from '../rl';

const loadEpic = action$ => action$
  .ofType(POST_LOAD)
  .switchMap(() => {
    const request = axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(({ data }) => data);

    return Observable
      .fromPromise(request)
      .switchMap(({ title, body }) => Observable
        .of(loadedAction())
        .concat(Observable.of(titleAction(title)))
        .concat(Observable.of(bodyAction(body))));
  })
  .catch(error => Observable.of(errorAction(error)));

export default loadEpic;

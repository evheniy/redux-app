import nock from 'nock';
import { expect } from 'chai';
import { ActionsObservable } from 'redux-observable';

import {
  loadAction,
  loadedAction,
  titleAction,
  bodyAction,
  POST_ERROR,
} from '../../../../src/modules/post/rl';

import epics from '../../../../src/modules/post/epics';

describe('Testing post module loadEpic', () => {
  it('should test loadEpic without error', (done) => {
    const title = 'title';
    const body = 'body';

    nock('https://jsonplaceholder.typicode.com')
      .get('/posts/1')
      .reply(200, { title, body });

    const action$ = ActionsObservable.of(loadAction());

    const expectedOutputActions = [
      loadedAction(),
      titleAction(title),
      bodyAction(body),
    ];

    epics(action$)
      .toArray()
      .subscribe((actualOutputActions) => {
        expect(actualOutputActions).to.be.eql(expectedOutputActions);
        done();
      });
  });

  it('should test loadEpic with error', (done) => {
    const message = 'Request failed with status code 404';

    nock('https://jsonplaceholder.typicode.com')
      .get('/posts/1')
      .reply(404);

    const action$ = ActionsObservable.of(loadAction());

    epics(action$)
      .toArray()
      .subscribe((actualOutputActions) => {
        expect(actualOutputActions).to.have.length(1);

        expect(actualOutputActions[0].type).to.be.equal(POST_ERROR);
        expect(actualOutputActions[0].error.message).to.be.equal(message);
        done();
      });
  });
});

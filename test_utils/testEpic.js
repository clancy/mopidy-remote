import { ActionsObservable } from 'redux-observable'
import { Subject } from 'rxjs'

export default (epic, count, action, callback, state = {}) => {
  const actions = new Subject()
  const actions$ = new ActionsObservable(actions)
  const store = { getState: () => state }
  epic(actions$, store)
    .take(count)
    .toArray()
    .subscribe(callback)
  if (action.length) {
    action.map(act => actions.next(act))
  } else {
    actions.next(action)
  }
}

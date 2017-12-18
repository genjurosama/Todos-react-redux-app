import {fetchTasks,fetchTskApi} from './tasksSaga';
import { call, put } from 'redux-saga/effects'
import {TASKS_FETCH_SUCCEEDED} from './tasks'

const iterator = fetchTasks();


test("should yield a fetch tasks effect",()=>{
    expect(iterator.next().value).toEqual(call(fetchTskApi));
})

const tasks = {}
const response = {
    data:{
        tasks : tasks
    }
}
test("should yield a put tasks succeeded effect ",()=>{
    expect(iterator.next(response).value).toEqual(put({type:TASKS_FETCH_SUCCEEDED,tasks:tasks}));
})

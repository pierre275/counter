import {counterActions, counterSlice} from '../../../src/store/slices/counter';

describe('counter slice tests', () => {
  const reducer = counterSlice.reducer;

  it('should start with initial value 0', () => {
    expect(reducer(undefined, {type: ''})).toEqual({value: 0});
  });

  it('should increment by 1', () => {
    expect(reducer(undefined, counterActions.INCREMENT())).toEqual({value: 1});
  });

  it('should reach limit when value equals 100', () => {
    expect(reducer({value: 99}, counterActions.INCREMENT())).toEqual({
      value: 100,
    });

    expect(reducer({value: 100}, counterActions.INCREMENT())).toEqual({
      value: 100,
    });
  });

  it('should decrement by 1', () => {
    expect(reducer({value: 3}, counterActions.DECREMENT())).toEqual({
      value: 2,
    });
  });

  it('should not decrement when value is 0', () => {
    expect(reducer({value: 0}, counterActions.DECREMENT())).toEqual({
      value: 0,
    });
  });

});

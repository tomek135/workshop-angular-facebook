import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {

  let pipe: MyDatePipe;

  beforeEach(()=>{
    pipe = new MyDatePipe();
  })


  it('create an instance', () => {
    const pipe = new MyDatePipe();
    expect(pipe).toBeTruthy();
  });


  it('should return empty string for Falsy Values', () => {
    [false].forEach((x) => {
      expect(pipe.transform(x)).toEqual('');
    });
    expect(pipe.transform(false)).toEqual('');
    expect(pipe.transform(undefined)).toEqual('');
    expect(pipe.transform(0)).toEqual('');
    expect(pipe.transform(NaN)).toEqual('');
    expect(pipe.transform("")).toEqual('');
    expect(pipe.transform(null)).toEqual('');
  })

  
  it('should return empty string for non-date values', () => {
    [[], {}].forEach((x) => {
      expect(pipe.transform(x)).toEqual('');
    })
  });

  it('should return proper date for date string', () => {
    const input = new Date('2022-06-09 10:20:30');
      expect(pipe.transform(input)).toEqual('9 czerwca 2022, 10:20');
  });
});

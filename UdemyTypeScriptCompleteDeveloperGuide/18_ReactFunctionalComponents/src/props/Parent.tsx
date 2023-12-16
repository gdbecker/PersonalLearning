import { Child } from './Child';

const Parent = () => {
  return <Child color='blue' onClick={() => console.log('clicked!')} />
}

export default Parent;
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import sinon from 'sinon';

export const sinonSpy = sinon;

const jestConfiguration = configure({ adapter: new Adapter() });

export default jestConfiguration;

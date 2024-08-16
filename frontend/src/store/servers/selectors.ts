import {State} from '../../types/state/state';
import {NameSpace} from '../namespace';

export const getServers = (state: State) => state[NameSpace.Servers].servers;

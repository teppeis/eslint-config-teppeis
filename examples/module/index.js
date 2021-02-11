import os from 'os';
import mod1 from './_mod1.js';
import mod, {bar, foo, _foo} from './mod0.js';
import mod2 from './Mod2.js';

os.cpus();
mod();
mod1();
foo();
_foo();
bar();
mod2();

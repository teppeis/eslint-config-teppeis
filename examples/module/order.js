/* eslint-disable import/no-unresolved */
import eslint from 'eslint';
import os from 'os';
import parent2 from '../../parent2.js';
import parent1 from '../parent.js';
import sibling2 from './sibling.js';
import sibling1 from './sibling/foo.js';

// eslint-disable-next-line no-undef
console.log(os, eslint, sibling2, sibling1, parent1, parent2);

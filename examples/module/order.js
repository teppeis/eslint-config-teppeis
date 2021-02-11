/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/default */
import eslint from 'eslint';
import os from 'os';
import index from '.';
import parent2 from '../../parent2';
import parent1 from '../parent';
import indexSlash from './';
import sibling2 from './sibling';
import sibling1 from './sibling/foo';

// eslint-disable-next-line no-undef
console.log(os, eslint, sibling2, sibling1, parent1, parent2, index, indexSlash);

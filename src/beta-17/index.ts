import * as path from 'path';

export const alias = {
  'angular2': resolveDir('.')
};

function resolveDir (path) {
  return path.join(__dirname, ...path.split('/').filter(token => !!token));
}

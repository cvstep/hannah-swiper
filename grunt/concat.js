module.exports = {
  options: {
    separator: '\n',
  },
  paths: {
    src: ['./spec/paths/**/*.yaml'],
    dest: '.tmp/paths.yaml',
  },
  definitions: {
    src: ['./spec/schemas/**/*.yaml'],
    dest: '.tmp/schemas.yaml',
  },
  info: {
    src: ['./spec/info/**/*.yaml'],
    dest: '.tmp/info.yaml',
  },
  parameters: {
    src: ['./spec/components/parameters.yaml'],
    dest: '.tmp/components/parameters.yaml',
  },
  responses: {
    src: ['./spec/components/responses.yaml'],
    dest: '.tmp/components/responses.yaml',
  },
  index: {
    src: ['./spec/index.yaml'],
    dest: '.tmp/index.yaml',
  },
};

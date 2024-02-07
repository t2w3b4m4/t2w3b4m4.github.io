import { ProgressStatus } from '../constants';

const precarious = {
  meta: {
    name: 'precarious',
    displayName: 'Precarious',
    about: '',
    progressStatus: ProgressStatus.IN_PROGRESS,
    numberOfImages: 0,
    status: '',
    releaseStatus: '',
    releaseDate: '',
    imageFolderName: 'precarious',
  },
  showings: [
    {
      fileName: 'precarious1.jpg',
      name: 'precarious #1',
      description: '', // "Sterling silver Ganesha statue sitting on the rocks, on top of Hemingway's <i>A Moveable Feast</i>",
      date: '2017-12-01',
    },
    {
      fileName: 'precarious2.jpg',
      name: 'precarious #2',
      description: '', // 'Tungsten carbide ring on the edge of a tile',
      date: '2021-01-11',
    },
  ],
};

export default precarious;

import { ProgressStatus } from '../constants';

const pedestal = {
  meta: {
    name: 'pedestal',
    displayName: 'Pedestal',
    about: '', // 'Shifting focus from the main subject to the supporting pedestals',
    imageFolderName: 'pedestal',
    progressStatus: ProgressStatus.IN_PROGRESS,
    numberOfImages: 0,
    status: '',
    releaseStatus: '',
    releaseDate: '',
  },
  showings: [
    {
      fileName: 'pedestal1.jpg',
      name: 'Cherry Wood columns',
      description: '',
      date: '2020-04-01',
    },
    {
      fileName: 'pedestal2.jpg',
      name: 'Lego on Tile',
      description: '',
      date: '2021-01-17',
    },
  ],
};

export default pedestal;

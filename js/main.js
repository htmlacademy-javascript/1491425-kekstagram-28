import {createPhotoDescriptions} from './data.js';
import {assemblyElements} from './rendering.js';
import './rendering-full-image.js';

const photoDetails = createPhotoDescriptions();
assemblyElements(photoDetails);

export {photoDetails};

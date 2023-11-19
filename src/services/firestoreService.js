import {
  addDoc,
  collection,
  doc,
  query,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import { firestore } from '../shared/firebase/config';

const getQuerySurvey = (userId)=> {
  return query(collection(firestore, 'pesquisas'));
};

const addSurvey = async (data, userId) => {
  const votes = {
    terrible: 0,
    bad: 0,
    neutral: 0,
    good: 0,
    great: 0,
  };

  data = {...data, ...votes};

  return await addDoc(collection(firestore, 'pesquisas'), data);
};

const updateSurvey = async (docId, userId, newData) => {
  const document = doc(firestore, 'pesquisas', docId);

  return await updateDoc(document, newData);
};

const deleteSurvey = async (docId, userId) => {
  const document = doc(firestore, 'pesquisas', docId);

  return await deleteDoc(document);
};

export {addSurvey, updateSurvey, deleteSurvey, getQuerySurvey};

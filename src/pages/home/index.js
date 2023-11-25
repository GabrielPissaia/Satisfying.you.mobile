import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import  ButtonGeral  from '../../components/ButtonGeral';
import InputTexto from '../../components/InputTexto';
import Card from '../../components/Card';
import styles from './styles';
import { onSnapshot } from 'firebase/firestore';
import { getQuerySurvey } from '../../services/firestoreService';
import { useAuth } from '../../context/authcontext';
import { useNavigation } from '@react-navigation/native';

export default function PaginaPrincipal(props) {
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const [surveys, updateSurveys] = useState([]);

  useEffect(() => {
    onSnapshot(getQuerySurvey(), querySnapshot => {
      const s = [];

      querySnapshot.forEach(doc => {
        s.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      console.log(s[0].nome)

      updateSurveys(s ?? []);
    });
  }, []);

  const filterData = useCallback((query, data) => {
    if (!query) {
      return data;
    } else {
      let filtered = data.filter(survey =>
        survey.name.toLowerCase().includes(query),
      );

      return filtered;
    }
  },  []);

  const dataFiltered = useMemo(
    () => filterData(searchQuery, surveys),
    [searchQuery, surveys],
  );

  const goToNovaPesquisa = useCallback(() => {
    props.navigation.navigate('NovaPesquisa')
  }, [])

  const goToAcoesPesquisa = useCallback(
    (id) => {
      navigate('AcoesPesquisa', { id });
    },
    [navigate],
  );

  return (
    <View style={styles.container}>
        <InputTexto placeholder={'Insira o termo de busca'} size={320} />
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.squaresContainer}>
            {surveys && (surveys.map((survey) => 
              <Card key={survey.id} style={styles.div} text={survey.nome} data={survey.data} imageSource={survey.image} onPress={() => goToAcoesPesquisa(survey.id)}/>))}
          </View>
      </ScrollView>
      <ButtonGeral style={styles.botao} title={'Nova Pesquisa'} color={'#37BD6D'} width={350} onPress={goToNovaPesquisa}/>
    </View>
  );
}

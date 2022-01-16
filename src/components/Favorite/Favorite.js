import { useSelector } from 'react-redux';
import { getFilteredFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Container from '../Container/Container';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));
  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            cardId={card.id}
          />
        ))}
      </ul>
    </>
  );
};

export default Favorite;

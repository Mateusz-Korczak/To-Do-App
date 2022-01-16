import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  console.log('card', props.id);
  const dispatch = useDispatch();
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    dispatch(
      toggleCardFavorite({ cardId: props.cardId, isFavorite: props.isFavorite })
    );
  };

  const handleDeleteCard = (e) => {
    e.preventDefault();
    dispatch(removeCard({ cardId: props.cardId }));
  };

  return (
    <li className={styles.card} key={props.id}>
      {props.title}
      <div className='buttons-wrapper'>
        <button onClick={handleToggleFavorite}>
          <span
            className={clsx(
              styles.favorite,
              'fa fa-star-o',
              props.isFavorite && styles.isFavorite
            )}
          />
        </button>
        <button onClick={handleDeleteCard}>
          <span
            className={clsx(
              styles.thrash,
              'fa fa-trash-o',
              props.isFavorite && styles.isFavorite
            )}
          />
        </button>
      </div>
    </li>
  );
};

export default Card;

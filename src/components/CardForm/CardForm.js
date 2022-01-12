import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = (props) => {
  const [action, setAction] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title: action, columnId: props.columnId }));
    setAction('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>task</label>
      <TextInput value={action} onChange={(e) => setAction(e.target.value)} />
      <Button>
        <span>Add Task</span>
      </Button>
    </form>
  );
};

export default CardForm;

import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = (props) => {
  const [action, setAction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: action }, props.columnId);
    setAction('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>action</label>
      <TextInput value={action} onChange={(e) => setAction(e.target.value)} />
      <Button>
        <span>Add Column</span>
      </Button>
    </form>
  );
};

export default CardForm;

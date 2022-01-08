import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>title</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>icon</label>
      <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>
        <span>Add Column</span>
      </Button>
    </form>
  );
};

export default ColumnForm;

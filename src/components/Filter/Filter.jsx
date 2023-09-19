import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Label, Title, Input } from './Filter.styled';
import { getFilter } from 'redux/filterSlice';

export const Filter = () => {
    const filterData = useSelector(state => state.filters);
    const dispatch = useDispatch();


    function filterValue(e) {
        dispatch(getFilter(e.currentTarget.value))
    }

    return (
        <Wrapper>
            <Title>Contacts</Title>
            <Label>Find contacts by name</Label>
            <Input type="text" placeholder="Enter name" value={filterData} onChange={filterValue} />
        </Wrapper>
    );
};
import { Box } from 'components/Box';
import { Button } from 'components/commonStyles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName, selectUserEmail } from 'redux/auth/selectorsAuth';

export const UserMenu = () => {
  const nameUser = useSelector(selectUserName);
  const emailUser = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box color="darkgreen">
      <span>Hello, {nameUser}! ({emailUser}) </span>
      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigate('/login', { replace: true });
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

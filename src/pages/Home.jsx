import { Box } from 'components/Box';
import { AppealText, MainTitle } from './pages.styled';

const Home = () => {
  return (
    <main>
      <Box color="darkgreen" mr="auto" ml="auto" width="70%" fontSize="m">
        <MainTitle>
          Welcome to the <b>Phonebook</b>!
        </MainTitle>
        <p>For you:</p>{' '}
        <ul>
          <li>
            the ability to save and delete the phone numbers of your friends,
            acquaintances, colleagues, etc.
          </li>
          <li>access to contacts is protected.</li>
        </ul>
        <AppealText>Enjoy using the app!</AppealText>
      </Box>
    </main>
  );
};
export default Home;

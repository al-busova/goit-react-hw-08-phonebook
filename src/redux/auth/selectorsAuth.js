export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;
export const selectIsLoadingAuth = state => state.auth.isLoading;
export const selectErrorAuth = state => state.auth.error;
export const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
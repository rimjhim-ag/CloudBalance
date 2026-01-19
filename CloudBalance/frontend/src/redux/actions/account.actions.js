import { API } from "../../api";

export const SET_ACCOUNTS = "accounts/SET_ACCOUNTS";

export const setAccounts = (payload) => ({
  type: SET_ACCOUNTS,
  payload,
});

export const setSelectedAccount = (accountId) => ({
  type: "SET_SELECTED_ACCOUNT",
  payload: accountId,
});

export const fetchAccounts = () => async (dispatch) => {
  dispatch(setAccounts({ data: [], loading: true, error: null }));

  try {
    const res = await API.get(`me/accounts`);

    dispatch(setAccounts({ data: res.data, loading: false, error: null }));
    return res.data;
  } catch (err) {
    dispatch(
      setAccounts({
        data: [],
        loading: false,
        error: err.message || "Failed to fetch accounts",
      })
    );
  }
};

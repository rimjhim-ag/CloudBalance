import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, setSelectedAccount } from "../redux/actions/account.actions";

function AccountsDropDown() {
  const dispatch = useDispatch();

  const { role} = useSelector((state) => state.user);
  const { accounts, selectedAccount, loading } = useSelector(
    (state) => state.accounts
  );

  const isCustomer = role === "CUSTOMER";


  useEffect(() => {
    if (isCustomer  && accounts.length === 0) {
      dispatch(fetchAccounts());
    }
  }, [isCustomer,  accounts.length, dispatch]);


  useEffect(() => {
    if (!selectedAccount && accounts.length > 0) {
      dispatch(setSelectedAccount(accounts[0]?.accountId));
    }
  }, [accounts, selectedAccount, dispatch]);

  const handleAccountChange = (e) => {
    dispatch(setSelectedAccount(e.target.value));
  };

  if (!isCustomer) return null;

  return (
    <div className="w-64">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Account
      </label>

      {loading ? (
        <div className="text-sm text-gray-500">Loading accounts...</div>
      ) : (
        <select
          value={selectedAccount || ""}
          onChange={handleAccountChange}
          className="
            w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm
            focus:outline-none focus:ring-2 focus:ring-[#0a3ca2]
          "
        >
          {accounts.map((acc) => (
            <option key={acc.accountId} value={acc.accountId}>
              {acc.accountName} ({acc.accountId})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default AccountsDropDown;

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OperationList } from "./operation/OperationList";
import { OperationCreate } from "./operation/OperationCreate";
import { OperationEdit } from "./operation/OperationEdit";
import { OperationShow } from "./operation/OperationShow";
import { CalculationList } from "./calculation/CalculationList";
import { CalculationCreate } from "./calculation/CalculationCreate";
import { CalculationEdit } from "./calculation/CalculationEdit";
import { CalculationShow } from "./calculation/CalculationShow";
import { UserPreferencesList } from "./userPreferences/UserPreferencesList";
import { UserPreferencesCreate } from "./userPreferences/UserPreferencesCreate";
import { UserPreferencesEdit } from "./userPreferences/UserPreferencesEdit";
import { UserPreferencesShow } from "./userPreferences/UserPreferencesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AdvancedCalculator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Operation"
          list={OperationList}
          edit={OperationEdit}
          create={OperationCreate}
          show={OperationShow}
        />
        <Resource
          name="Calculation"
          list={CalculationList}
          edit={CalculationEdit}
          create={CalculationCreate}
          show={CalculationShow}
        />
        <Resource
          name="UserPreferences"
          list={UserPreferencesList}
          edit={UserPreferencesEdit}
          create={UserPreferencesCreate}
          show={UserPreferencesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
